import { Container, Row, Col, Form } from 'reactstrap'
import { Paper, TextField, Button, ButtonGroup } from "@material-ui/core"
import React from 'react'
import axios from 'axios'
import Clipboard from 'react-clipboard.js'

export default class Appff extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          phrase:'',
        phrases: [],         
        notes: []     
        }; 

        this.handleAddToText = this.handleAddToText.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);        
    }
    
    //Loads the JSON API
    async componentDidMount() {
    await axios.get('https://jsonbox.io/box_f3ad47a8484eb5897d71/appff')
          .then(response => {
            this.setState({ phrases: response.data })
          })
          .catch((error) => {
            console.log(error);
          })
      }

    //will handle data that will be added on array to the text field
    handleAddToText (phrase,event) {        
        console.log(phrase)
        this.setState({ notes: [...this.state.notes, phrase]})      
      }

    //deletes data from JSON API
    async handleDelete(id, event){
    await axios.delete(`https://jsonbox.io/box_f3ad47a8484eb5897d71/appff/${id}`)
        .then(res => {
            console.log(res);
            console.log(res.data);
      
            const phrases = this.state.phrases.filter(item => item.id !== id);
            this.setState({ phrases });
          })
          window.location.reload(false)
    }

    handleChange = (event) => {
        this.setState({phrase: event.target.value});        
    }

    onChangeText = (event) => {
        this.setState({
            noteTextArea: event.target.value
        })
    }

    //adds new DATA
    async handleSubmit(event){      
        event.preventDefault();  
        const phrase = {
            phrase: this.state.phrase
        }
        console.log(phrase);
    await axios.post('https://jsonbox.io/box_f3ad47a8484eb5897d71/appff', phrase)
        .then(res => console.log(res.data));   
        
        this.setState({
            phrase : ''
        })
        window.location.reload(false)
    }

    

    render() {            

        const newNote = this.state.notes
        const textArray = newNote.join('.')

        return (
            <Container style={{marginTop: '40px'}}>              
            <Row>
                <Col>
                    
                    <Paper style={{marginBottom: "20px", marginTop: '80px'}}>
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
                                maringTop: '20px',
                                marginBottom: '10px'                            
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
                <div style={{                    
                    position: 'fixed',
                    width: '43%'
                }}>
                    <Paper  style={{marginTop: '80px'}}>                    
                    <TextField 
                        id="noteTextArea"
                        value={textArray}                                     
                        onChange={this.onChangeText}                                              
                        multiline
                        rows={9}                        
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
                    <Clipboard 
                        data-clipboard-text={this.state.notes} 
                        button-title="COPIED!"
                        style={{
                            borderRadius: '5px',
                            height: '38px',
                            width: '100%',
                            borderColor: 'blue',
                            backgroundColor: 'blue',
                            color: 'white',
                            marginTop: '6px',                                                    
                        }}
                        onClick={(e) => this.handleClearText(window.location.reload(false))}
                    >COPY</Clipboard>                                                    
                    </Paper>
                </div>
                </Col>            
            </Row>                
        </Container>
        )
    }
}