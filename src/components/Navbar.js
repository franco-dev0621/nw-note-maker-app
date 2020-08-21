import React, { Component } from 'react'
import { Navbar } from 'reactstrap';

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar 
                    color="dark"
                    style={{
                        color: 'white'
                    }}
                >Ma.Arliza Note Maker</Navbar>
            </div>
        )
    }
}
