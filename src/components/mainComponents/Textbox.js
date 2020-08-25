import React from 'react'
import { Paper, TextField } from '@material-ui/core'
import Clipboard from 'react-clipboard.js'

function Textbox(props) {

    return (
        <div style={{                    
            position: 'fixed',
            width: '43%'
        }}>
            <Paper style={{marginTop: '80px'}}>                    
            <TextField 
                id="noteTextArea"
                value={props.value}
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
            data-clipboard-text={props.text} 
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
            >COPY</Clipboard>
                                                              
            </Paper>
        </div>
    )
}

export default Textbox

