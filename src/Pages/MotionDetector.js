import React, {Component} from "react";
import { withStyles} from '@material-ui/core/styles';
import {Grid} from '@material-ui/core'
import { Typography } from "@material-ui/core";
import { NavLink } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Footer from './footer';

const styles={
  root:{
    flexGrow:1,
    padding:'0px',
    margin:'0px',
    overflow:'hidden'

  },
  footer:{
    backgroundColor:'#e1d8d8',
    position:'relative',
    marginTop:'34rem',
    width:'110%',
    height:'85px',
  },
  devices:{
    marginTop:'2rem',
   
  },
  fontforheader:{
    fontFamily:'Roboto Mono,monospace !important',
    fontSize:'20.4px',
    fontWeight:'400',
    lineHeight:'normal',
    color:'#262327',
    marginLeft:'5rem',
    '@media(max-width:768px)': {
      fontSize:'1rem', 
      padding:'10px',
      marginLeft:'0px'
    }
  
    
  },
  fontrealtime:{
    fontFamily:'Roboto Mono,monospace !important',
    fontSize:'20.4px',
    fontWeight:'400',
    lineHeight:'normal',
    color:'#262327',
    marginLeft:'5rem',
    '&:hover':{
      color:'#ee7112',
    },
    '@media(max-width:768px)': {
      fontSize:'0.8rem', 
      padding:'10px',
      marginLeft:'0px'
    }
  },
lastupdate:{
  fontFamily:'Roboto Mono,monospace !important',
    fontSize:'20.4px',
    fontWeight:'400',
    lineHeight:'normal',
    color:'#262327',
    '@media(max-width:768px)': {
      fontSize:'0.8rem', 
      padding:'10px'  }
},
realTimeData:{
  fontFamily:'Roboto Mono,monospace !important',
    fontSize:'20.4px',
    fontWeight:'400',
    lineHeight:'normal',
    color:'#262327',
    marginTop:'1rem',
    marginLeft:'5rem',
    '@media(max-width:768px)': {
      padding:'10px',
      marginLeft:'0px',
   }
},
datadevives:{
  fontSize:'1.5rem',
  letterSpacing:'1rem',
  fontWeight:'700',
  marginLeft:'5rem',
  borderBottom:'1px solid #B0BBB6',
  '@media(max-width:768px)': {
    fontSize:'1.5rem', 
    padding:'10px',
    marginLeft:'0px',
    borderBottom:'none',
 }
},
  latestmotion:{
   marginLeft:'5rem',    
  '@media(max-width:1300px)': {
        marginLeft:'0rem',    }
      } ,
   parametrs:{
    fontFamily:'Roboto,sans-serif !important',
    fontSize:'1.2rem',
    fontWeight: '200',
    '@media(max-width:768px)': {
        fontSize:'.9rem', 
        fontWeight:'100',}    
 },
 data:{
  fontSize:'1.5rem',
  borderBottom:'1px solid #B0BBB6',
  fontWeight:'700',
  '@media(max-width:768px)': {
    fontSize:'1rem', 
  }
},

}
class MotionDetector extends  Component{
  constructor(props){
    super(props)
    this.state={
      devicesActive:1,
      devicesInActive:0,
      time:'20:28:32',
      date:'16/06/21',
      totalActivitHour:'00:18:03',
      lastUpdate:'15/06/2021  21:38:32'

    }
  }
  render(){
    const {classes}=this.props
    const{devicesActive,
      devicesInActive,
      time,
      date,
      totalActivitHour,
      lastUpdate,
    }=this.state;
    return(
      <div className={classes.root}>
        <Grid container spacing={1} >

        <Grid xs={12} md={7} lg={7} className={classes.devices} justifyContent="center">
          <div className={classes.fontrealtime}>
              <NavLink style={{textDecoration:'none',color:'inherit',
              borderBottom:'1px solid #B0BBB6', padding:'10px'}}
               to='/motion-detector'>Motion Detector-Location:Office, Navy Mumbai</NavLink>
          </div>
        </Grid>
        <Grid item xs={12} md={5} lg={5} className={classes.devices}>
          <div className={classes.lastupdate}>
              <span style={{textDecoration:'none',color:'inherit',
              borderBottom:'1px solid #B0BBB6', padding:'10px'}}>last update:{lastUpdate} </span>
          </div>
        </Grid>
          <Grid item xs={12} md={5} lg={5} className={classes.devices}>
          <Typography   className={classes.fontforheader}>
                Devices Active / <span style={{color:'#9F0500'}}>Inactive</span>
          </Typography>
          <Typography className={classes.datadevives}>
            {devicesActive}
          /<span style={{color:'#9F0500'}}>{devicesInActive}</span>
          </Typography>
          </Grid>
          <Grid item xs={12}>
          <div className={classes.realTimeData}>
            Real Time Data
          </div>
         </Grid>
          <Grid item xs={12} lg={6} md={6}></Grid>

          <Grid item xs={12} ></Grid>
          <Grid item xs={7} lg={3} sm={6} className={classes.latestmotion}>
          <Typography className={classes.parametrs} >
              Latest Motion Detected at
            </Typography>
            <Typography className={classes.data} >
              {time}<span >{date}</span>
            </Typography>
          </Grid>
          <Grid item xs={5} lg={2} sm={6}>
          <Typography className={classes.parametrs} >
              Total Activity Time
            </Typography>
            <Typography className={classes.data}  >
              {totalActivitHour}
          </Typography>
          </Grid>
          <Grid item xs={6} lg={2} sm={6}>
          <Typography className={classes.parametrs} >
              Motion End Time
            </Typography>
            <Typography className={classes.data} >
              {time}<span >{date}</span>
            </Typography>
          </Grid>
          <Grid xs={12} lg={2} sm={6}></Grid>
          <Grid item xs={12}></Grid>
       
          <Footer/>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(MotionDetector);