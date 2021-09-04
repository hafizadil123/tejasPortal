import React, {Component} from 'react';
import {Navbar,Nav} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faLightbulb} from '@fortawesome/free-solid-svg-icons'
import {LinkContainer} from 'react-router-bootstrap'
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import { NavLink } from 'react-router-dom';

import './Navbar2.css';
import { Typography } from '@material-ui/core';
class Navbar2 extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Navbar className="color-nav" varaiant="dark"
            expand="lg"
            collapseOnSelect
            >
                <Navbar.Toggle/>
                <Navbar.Collapse>
                <Nav>
                    <LinkContainer to="/energy-meter" exact>
                       <Nav.Link >
                           <FontAwesomeIcon icon={faLightbulb}/> &nbsp;
                           Energy Meter
                      </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/motion-detector" exact>
                      <Nav.Link > 
                      <i class="fab fa-creative-commons-sampling"></i> &nbsp;
                       Motion Detecter
                       </Nav.Link>
                    </LinkContainer >
                    <LinkContainer to="/temp-humidity-meter" exact>
                        <Nav.Link >
                        <i class="fas fa-thermometer-three-quarters"></i> &nbsp;
                          Temperature And Humidity Meter
                       </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/water-flow" exact>
                       <Nav.Link >
                       <i class="fas fa-water"></i> &nbsp;
                          Water Flow and Level Meter
                      </Nav.Link>
                    </LinkContainer>
                   <LinkContainer to="/brightness-meter" exact>
                     <Nav.Link >
                     <WbIncandescentIcon/> &nbsp;
                        Brightness Meter
                      </Nav.Link>
                   </LinkContainer>
                   <LinkContainer to="/weight-scale" exact>
                      <Nav.Link >
                      <i class="fas fa-weight"></i> &nbsp;
                        Weight Scale
                      </Nav.Link>
                   </LinkContainer>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
export default Navbar2
