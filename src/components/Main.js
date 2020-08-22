import React, {useState} from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Paper, TextField, Button, ButtonGroup } from "@material-ui/core"

const Main = () => {    

    return (
        <Container 
            style={{marginTop: '40px'}}>              
            <Row>
                <Col>
                    <Paper 
                        style={{marginBottom: "20px"}}>
                        <TextField
                            id="outlined-helperText"
                            label="Enter New Phrase"
                            variant="outlined"
                            style={{                                
                                width: '90%',
                                marginTop: '20px',
                                marginBottom: '20px',                                
                                marginLeft: '20px',
                            }}
                        />
                        <Container>
                            <Button 
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
                            <ButtonGroup                             
                            variant="contained" 
                            style={{
                                width: '100%', 
                                marginTop: '10px',
                                marginBottom: '10px'
                            }}>
                                <Button color="secondary">DEL</Button>
                                <Button color="warning" style={{backgroundColor: '#33c45a'}}>UPD</Button>
                                <Button style={{width: '100%'}}>PHRASE</Button>
                            </ButtonGroup>
                            <ButtonGroup                             
                            variant="contained" 
                            style={{
                                width: '100%', 
                                marginTop: '10px',
                                marginBottom: '10px'
                            }}>
                                <Button color="secondary">DEL</Button>
                                <Button color="warning" style={{backgroundColor: '#33c45a'}}>UPD</Button>
                                <Button style={{width: '100%'}}>PHRASE</Button>
                            </ButtonGroup>
                            <ButtonGroup                             
                            variant="contained" 
                            style={{
                                width: '100%', 
                                marginTop: '10px',
                                marginBottom: '10px'
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

export default Main
