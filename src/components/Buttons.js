import React, { Component } from 'react'
import { Button, ButtonGroup, TextareaAutosize} from '@material-ui/core/';
import { Container, Row, Col } from 'reactstrap';

export default class Buttons extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <ButtonGroup
                            orientation="vertical"
                            color="primary"
                            aria-label="vertical contained primary button group"
                            variant="text"
                            style={{marginTop: '50px'}}
                            >
                            <Button>Phrase One</Button>
                            <Button>Phrase Two</Button>
                            <Button>Phrase Three</Button>
                        </ButtonGroup>    
                    </Col>
                    <Col>
                    <TextareaAutosize
                    rowsMax={4}
                    aria-label="maximum height"
                    placeholder="Maximum 4 rows"
                    defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua."
                  />
                    </Col>
                </Row>            
            </Container>
        )
    }
}
