import React , {Component} from 'react';
import {Navbar,Nav} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faLightbulb} from '@fortawesome/free-solid-svg-icons'
import DashboardIcon from '@material-ui/icons/Dashboard';
import MemoryIcon from '@material-ui/icons/Memory';
import BookIcon from '@material-ui/icons/Book';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HomeIcon from '@material-ui/icons/Home';
import ReportIcon from '@material-ui/icons/Report';
import {LinkContainer} from 'react-router-bootstrap'
import './Topbar.css';
import { withStyles} from '@material-ui/core/styles';

const styles={
    root:{
        padding:'0px',
        margin:'0px',
        overflow:'hidden',
     
     '@media(max-width:768px)': {
         overflowX:'hidden'
     }
},
navItems:{
    '@media(max-width:768px)': {
        fontSize:'5px'}
}
}


class Topbar extends Component{
    constructor(props){
        super(props)
        this.state={lastUpdate:'15/06/2021  21:38:32'}
    }
    render(){
        const {lastUpdate}=this.state
        const {classes}=this.props
        return(
            <div className={classes.root}>
            <Navbar className="color-navtop" varaiant="dark"
            
            >
                <Nav>
                    <LinkContainer to="/energy-meter" exact>
                       <Nav.Link  className={classes.navItems}>
                           {/* <FontAwesomeIcon icon={faLightbulb}/> &nbsp; */}
                        tejaslahir.com
                      </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/" exact>
                      <Nav.Link  className={classes.navItems}> 
                      {/* <HomeIcon/>&nbsp; */}
                       Home
                       </Nav.Link>
                    </LinkContainer >
                    <LinkContainer to="/" exact>
                        <Nav.Link  className={classes.navItems}>
                       {/* <MemoryIcon/> &nbsp; */}
                          IOT Prototypes
                       </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/" exact>
                       <Nav.Link  className={classes.navItems}>
                       {/* <BookIcon/> &nbsp; */}
                          Blog
                      </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/" exact>
                       <Nav.Link  className={classes.navItems}>
                       {/* <DashboardIcon/> &nbsp; */}
                          Dashboard
                      </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/" exact>
                       <Nav.Link  className={classes.navItems}>
                      {/* <NotificationsIcon/> &nbsp; */}
                          Alerts
                      </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/" exact>
                       <Nav.Link  className={classes.navItems}>
                      {/* <ReportIcon/> &nbsp; */}
                          Reports
                      </Nav.Link>
                    </LinkContainer>
                </Nav> 
            </Navbar>
            </div>
        )
    }
}
export default withStyles(styles)(Topbar);