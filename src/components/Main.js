import React, { Component } from 'react'
import { Navbar, NavItem, Container, NavbarBrand, Nav } from 'reactstrap';
import {NavLink} from 'react-router-dom';

import './main.css'

export default class NavBar extends Component {
    render() {
        return (
            <div>                
                  <Navbar  className="navBar">
                    <Nav>                                 
                      <NavItem>
                        <NavLink style={{ textDecoration: 'none', textDecorationColor: 'light'}} to="/rently/">Rently  </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink to="/showmojo/">Show Mojo  </NavLink>    
                      </NavItem>
                      <NavItem>
                        <NavLink to="/tt/">TT  </NavLink>      
                      </NavItem>
                      <NavItem>
                        <NavLink to="/appff/">App FF</NavLink>     
                      </NavItem>
                    </Nav>
                  </Navbar>                
            </div>
        )
    }
}
