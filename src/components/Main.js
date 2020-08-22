import { Container, Row, Col, Form, Alert } from 'reactstrap'
import { Paper, TextField, Button, ButtonGroup } from "@material-ui/core"
import React from 'react'
import axios from 'axios'

export default class Main extends React.Component {
    constructor(props) {
      super(props);
      this.state = {phrase: []}; 
    }

      componentDidMount() {
      axios.get('http://localhost:5001/exercises/')
        .then(response => {
          this.setState({ exercises: response.data })
        })
        .catch((error) => {
          console.log(error);
        })
    }

    
    handleChange = (event) => {
        this.setState({phrase: event.target.value});        
    }

    handleSubmit = (event) => {        
        const phrase = {
            phrase: this.state.phrase
        }
        console.log(phrase);
        axios.post('https://jsonbox.io/box_f3ad47a8484eb5897d71/', phrase)
        .then(res => console.log(res.data));        
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
                            value={this.state.phraseInput}
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
                        <Container>
                            <ButtonGroup                                 
                                variant="contained" 
                                style={{
                                    width: '100%', 
                                    marginTop: '10px',
                                    marginBottom: '10px',
                                    backgroundColor: '#afb3b0'
                                }}>
                                    <Button color="secondary">DEL</Button>
                                    <Button color="warning" style={{backgroundColor: '#33c45a'}}>UPD</Button>
                                    <Button style={{width: '100%'}}>PHRASE</Button>
                            </ButtonGroup>                                                 
                        </Container>                    
                    </Paper>                   
                </Col>                
                <Col>
                    <Paper>
                    <TextField                        
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
                    >SAVE</Button>
                    </Paper>
                </Col>            
            </Row>                
        </Container>
        )
    }
}