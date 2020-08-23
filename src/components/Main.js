import { Container, Row, Col, Form, Alert } from 'reactstrap'
import { Paper, TextField, Button, ButtonGroup } from "@material-ui/core"
import React from 'react'
import axios from 'axios'

export default class Main extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          phrase:'',
        phrases: [],         
        notes: []     
        }; 

        this.handleAddToText = this.handleAddToText.bind(this);
    }
    
    componentDidMount() {
    axios.get('https://jsonbox.io/box_f3ad47a8484eb5897d71/')
          .then(response => {
            this.setState({ phrases: response.data })
          })
          .catch((error) => {
            console.log(error);
          })
      }

    handleAddToText(phrase,event){        
        this.setState({note: phrase})
        console.log(this.state.note)
        this.setState({ notes: [...this.state.notes, this.state.note]})        
      }
       
    

    handleDelete(id, event){
        axios.delete(`https://jsonbox.io/box_f3ad47a8484eb5897d71/${id}`)
        .then(res => {
            console.log(res);
            console.log(res.data);
      
            const phrases = this.state.phrases.filter(item => item.id !== id);
            this.setState({ phrases });
          })
          window.location = '/';
    }

    handleChange = (event) => {
        this.setState({phrase: event.target.value});        
    }

    handleSubmit = (event) => {      
        event.preventDefault();  
        const phrase = {
            phrase: this.state.phrase
        }
        console.log(phrase);
        axios.post('https://jsonbox.io/box_f3ad47a8484eb5897d71/', phrase)
        .then(res => console.log(res.data));   
        
        this.setState({
            phrase : ''
        })
        window.location = '/';
    }

    

    render() {

        

        return (
            <Container style={{marginTop: '40px'}}>              
            <Row>
                <Col>
                    
                    <Paper style={{marginBottom: "20px"}}>
                    <Form onSubmit={this.handleSubmit}>
                        <Container>
                        <TextField
                            value={this.state.phrase}
                            onChange={this.handleChange}
                            id="outlined-helperText"
                            label="Enter New Phrase"
                            variant="outlined"
                            style={{                                
                                width: '100%',                         
                                maringTop: '20px'                            
                            }}                            
                        />
                        
                            <Button 
                                type="submit"
                                value="submit"
                                variant="contained" 
                                color="primary"
                                style={{                                
                                    width: '100%',
                                    marginBottom: "20px"                                                                    
                                }}                                
                            >
                                Enter
                            </Button>
                        </Container>                        
                    </Form>
                    </Paper>
                    <Paper>
                        <Container> {this.state.phrases.map((phrase) => (
                            <ButtonGroup   
                                key={phrase._id}                              
                                variant="contained" 
                                style={{
                                    width: '100%', 
                                    marginTop: '10px',
                                    marginBottom: '10px',
                                    backgroundColor: '#afb3b0'
                                }}>
                                    <Button 
                                        color="secondary"
                                        onClick={(event) => 
                                            this.handleDelete(phrase._id, event)}
                                    >DEL</Button>                                    
                                    <Button 
                                        style={{width: '100%'}}
                                        onClick={(event) => 
                                            this.handleAddToText(phrase.phrase, event)}
                                    >{phrase.phrase}</Button>
                            </ButtonGroup>                                                 
                        ))}
                            
                        </Container>                    
                    </Paper>                   
                </Col>                
                <Col>
                    <Paper>                    
                    <TextField         
                        value={this.state.notes}                                     
                        onChange={this.onChangeText}
                        id="outlined-multiline-static"                        
                        multiline
                        rows={17}                        
                        variant="outlined"
                        style={{
                            padding: '10px',
                            width: '100%'
                        }}
                    />
                    </Paper>
                    <Paper style={{
                        padding: '10px',
                        marginTop: '10px'                        
                    }}>
                    <Button 
                        variant="contained" 
                        color="primary"
                        style={{width: '45%'}}
                    >COPY</Button>
                    {" "}
                    <Button 
                        variant="contained" 
                        color="primary"
                        style={{width: '45%'}}
                    >CLEAR</Button>
                    </Paper>
                </Col>            
            </Row>                
        </Container>
        )
    }
}