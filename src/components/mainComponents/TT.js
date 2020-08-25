import { Container, Row, Col, Form} from 'reactstrap'
import { Paper, TextField, Button, ButtonGroup } from "@material-ui/core"
import React from 'react'
import axios from 'axios'
import Textbox from './Textbox';




export default class TT extends React.Component {
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
    await axios.get('https://jsonbox.io/box_f3ad47a8484eb5897d71/tt')
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
        
    await axios.delete(`https://jsonbox.io/box_f3ad47a8484eb5897d71/tt/${id}`)
        .then(res => {
            console.log(res);
            console.log(res.data);
      
            const phrases = this.state.phrases.filter(item => item.id !== id);
            this.setState({ phrases });
          })
         // window.location = '/rently'; 
       
    }

    handleChange = (event) => {
        this.setState({phrase: event.target.value});        
    }

    onChangeText = (event) => {
        this.setState({
            notes: event.target.notes
        })
    }

    //adds new DATA
    async handleSubmit(event){      
        event.preventDefault();  
        const phrase = {
            phrase: this.state.phrase
        }
        console.log(phrase);
    await axios.post('https://jsonbox.io/box_f3ad47a8484eb5897d71/tt', phrase)
        .then(res => console.log(res.data));   
        
        this.setState({
            phrase : ''
        })
       // const nwin = ngui.Window.get();      
        //console.log(nwin)
        //nwin.reloadIgnoringCache();
       // window.location="/";
    }

    

    render() {            

        const newPhrases = this.state.phrases
        // sort ARRAY depening on when they are added to the API // DESC
        newPhrases.sort((a,b) => (a._createdOn > b._createdOn) ? 1 : ((b._createdOn>a._createdOn) ? -1 : 0))

        
        //const nwin = ngui.Window.get();      
        //console.log(nwin)

        return (            
            
            
            <Row>
                <Col>                    
                    <Paper style={{marginBottom: "20px", marginTop: '50px'}}>
                    <h3 style={{padding: '10px'}}>TT</h3>
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
                        <Container> {newPhrases.map((phrase) => (
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
                    <Textbox 
                        value={(this.state.notes).join(' ')}
                        text={this.state.notes}
                    />
                </Col>            
            </Row>                
        
        )
    }
}