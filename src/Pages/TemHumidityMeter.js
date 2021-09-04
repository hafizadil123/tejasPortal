import React, {Component} from "react";
import { withStyles} from '@material-ui/core/styles';
import {Grid} from '@material-ui/core'
import { Typography } from "@material-ui/core";
import { NavLink } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Footer from './footer';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import WeightScale from "./WeightScale";
const data = [
  {
    name: "Voltge",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Current",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Power",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Frequency",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Power Factor",
    uv: 270,
    pv: 308,
    amt: 4500
  },
];

const styles={
  root:{
    flexGrow:1,
    padding:'0px',
    margin:'0px',
    overflow:'hidden',

  },
  footer:{
    backgroundColor:'#e1d8d8',
    position:'relative',
    marginTop:'135px',
    width:'100%',
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
  currenttemp:{
    marginLeft:'5rem',
  
    '@media(max-width:768px)': {
      marginLeft:'1.4rem',    },
      '@media(min-width:900px) and (max-width:1100px)': {
        marginLeft:'5.5rem',    }
  },
  parametrs:{
    fontFamily:'Roboto,sans-serif !important',
    fontSize:'1.2rem',
    fontWeight: '200',
    '@media(max-width:768px)': {
      fontSize:'.9rem', 
      fontWeight:'100',   }

  },
  data:{
    fontSize:'1.5rem',
    fontWeight:'700',
    borderBottom:'1px solid #B0BBB6',
    '@media(max-width:768px)': {
      fontSize:'1rem', 
        }
  },
  currenthumidity:{
    
    marginLeft:'5rem',
    '@media(max-width:768px)': {
      marginLeft:'1.4rem',    },
      '@media(min-width:900px) and (max-width:1100px)': {
        marginLeft:'5rem',    }
  },
  graph:{
    marginTop:'5.3rem',
    marginLeft:'450px',
    '@media(max-width:768px)': {
      marginLeft:'0px', },
      '@media(min-width:900px) and (max-width:1100px)': {
        marginLeft:'290px',    }
  }
}
class TempHimidityMeter extends  Component{
  constructor(props){
    super(props)
    this.state={
      devicesActive:1,
      devicesInActive:0,
      curtemp:42.5,
      maxtemp:46.1,
      mintemp:38.9,
      curhumidity:60,
      maxhumidity:66,
      minhumidity:58,
      lastUpdate:'15/06/2021  21:38:32',

    }
  }
  render(){
    const {classes}=this.props
    const{
      devicesActive,
      devicesInActive,
      curtemp,
      maxtemp,
      mintemp,
      curhumidity,
      maxhumidity,
      minhumidity,
      lastUpdate,
    }=this.state;
    return(
      <div className={classes.root}>
        <Grid container spacing={1}>   
        <Grid xs={12} md={7} lg={7} className={classes.devices} justifyContent="center">
          <div className={classes.fontrealtime}>
              <NavLink style={{textDecoration:'none',color:'inherit',
              borderBottom:'1px solid #B0BBB6', padding:'10px'}}
               to='/temp-humidity-meter'>Temperature And Humidity-Location:Office, Navy Mumbai</NavLink>
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
          <Grid item xs={12} lg={6} md={6}></Grid>
          {/* <Grid item xs={12}><Divider variant="middle" /></Grid> */}
         <Grid item xs={12}>
          <div className={classes.realTimeData}>
            Real Time Data
          </div>
         </Grid>
    
          <Grid item xs={3} lg={2} sm={3} className={classes.currenttemp}>
          <Typography className={classes.parametrs}>
              Current Temperature
            </Typography>
            <Typography className={classes.data}>
              {curtemp}&deg; <span >C</span>
            </Typography>
          </Grid>
          <Grid item xs={3} lg={2} sm={3}>
          <Typography className={classes.parametrs}>
              Max Temperature
            </Typography>
            <Typography className={classes.data} >
              {maxtemp}&deg; <span >C</span>
            </Typography>
          </Grid>
          <Grid item xs={3} lg={2} sm={3}>
          <Typography className={classes.parametrs}>
              Min Temperature
            </Typography>
            <Typography className={classes.data}>
              {mintemp}&deg; <span >C</span>
            </Typography>
          </Grid>
          {/* bottom */}
          
          <Grid item xs={12}></Grid>
         
          <Grid item xs={3} lg={2} sm={3}  className={classes.currenthumidity}>
          <Typography className={classes.parametrs}>
              Current Humidity
            </Typography>
            <Typography className={classes.data}>
              {curhumidity} %
            </Typography>
          </Grid>
          <Grid item xs={3} lg={2} sm={3}>
          <Typography className={classes.parametrs}>
              Max Humidity
            </Typography>
            <Typography className={classes.data} >
              {maxhumidity} %
            </Typography>
          </Grid>
          <Grid item xs={3} lg={2} sm={3}>
          <Typography className={classes.parametrs}>
              Min Humidity
            </Typography>
            <Typography className={classes.data}>
              {minhumidity} %
            </Typography>
          </Grid>

          <Grid container item spacing={2}>
          <Grid item xs={12} lg={7} sm={9} className={classes.graph}>
          <LineChart
      width={400}
      height={280}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 0,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="pv"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
          </Grid>
          <Footer/>
          </Grid>
          
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(TempHimidityMeter);