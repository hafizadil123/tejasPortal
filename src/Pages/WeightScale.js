import React, {Component} from "react";
import { withStyles} from '@material-ui/core/styles';
import {Grid} from '@material-ui/core'
import { Typography } from "@material-ui/core";
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
    marginTop:'50px',
    width:'100%',
    height:'85px',
  },
  devices:{
    marginTop:'4rem',
    
   
  },
  realtime:{
    marginTop:'2rem',
   marginLeft:'5rem',
   '@media (max-width:768px)':{
    marginLeft:'1rem'

   }
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
  data:{
    fontSize:'1.5rem',
    fontWeight:'700',
    padding:'10px',
    borderBottom:'1px solid #B0BBB6',
    '@media(max-width:768px)': {
      fontSize:'1rem', 
   }
  },
  parametrs:{
    fontFamily:'Roboto,sans-serif !important',
    fontSize:'1.2rem',
    fontWeight: '200',
    '@media(max-width:768px)': {
      fontSize:'.9rem', 
      fontWeight:'100',   }

  },
  energy:{
    marginLeft:'5rem',
  
    '@media(max-width:768px)': {
      marginLeft:'1rem',    },
    
  },
  graph:{
    marginTop:'5.3rem',
    marginLeft:'25rem',
    '@media(max-width:768px)': {
      marginLeft:'0px' ,},
      '@media(min-width:900px) and (max-width:1100px)': {
        marginLeft:'290px',    }
  },
  otherenergydetail:{
    marginLeft:'5rem',
    '@media(max-width:768px)': {
      marginLeft:'1rem' ,},
      
  },
  thismonth:{
    marginLeft:'4.5rem',
    '@media(max-width:768px)': {
      marginLeft:'1rem' ,},
     
  }
}
class WeightScale extends  Component{
  constructor(props){
    super(props)
    this.state={
      devicesActive:1,
      devicesInActive:0,
      volts:235.3,
      amps:2.35,
      watts:1535,
      energyConsumed:12.5,
      energyConsumedWeekly:84.1,
      energyConsumedMonthly:232.8,
      powerFactor:0.95,
      pahseAngle:357.6,
    }
  }
  render(){
    const {classes}=this.props
    const{devicesActive,
      devicesInActive,
      volts,
      amps,
      watts,
      energyConsumed,
      energyConsumedWeekly,
      energyConsumedMonthly,
      powerFactor,
      pahseAngle,
    }=this.state;
    return(
      <div className={classes.root}>
        <Grid container spacing={1} >
        
          
        <Grid item xs={12} md={5} lg={5} className={classes.devices}>
          <Typography   className={classes.fontforheader}>
                Devices Active / <span style={{color:'#9F0500'}}>Inactive</span>
          </Typography>
          <Typography className={classes.datadevives}>
            {devicesActive}
          /<span style={{color:'#9F0500'}}>{devicesInActive}</span>
          </Typography>
          </Grid>
          <Grid item md={6} lg={5}></Grid>
          <Grid xs={12} lg={4} sm={6} className={classes.realtime}>
          <Typography className={classes.parametrs}>
                Real Time Data 
            </Typography>
            <Typography className={classes.data}>
              {volts} <span style={{fontSize:'15px'}}>Volts</span>  /&nbsp;
              {amps} <span style={{fontSize:'15px'}}>Amps</span>  /&nbsp;
              {watts} <span style={{fontSize:'15px'}}>Watts</span> 
            </Typography>
          </Grid>

          <Grid xs={12} lg={4} sm={6} className={classes.realtime}>
          <Typography className={classes.parametrs}>
                Energy Consumed Today
            </Typography>
            <Typography className={classes.data}>
              {watts} <span style={{fontSize:'15px'}}> Units</span>
            </Typography>
          </Grid>
          <Grid item xs={12}></Grid>
         
          <Grid item xs={12}></Grid>
          <Grid xs={12} lg={4} sm={6} className={classes.energy}>
          <Typography className={classes.parametrs}>
                Energy Consumed This Week
            </Typography>
            <Typography className={classes.data}>
            {energyConsumedWeekly} <span style={{fontSize:'15px'}}>Units</span>
            </Typography>
          </Grid>
          <Grid xs={12} lg={4} sm={6} className={classes.thismonth}>
          <Typography className={classes.parametrs}>
                Energy Consumed This Month
            </Typography>
            <Typography className={classes.data}>
              {energyConsumedMonthly} <span style={{fontSize:'15px'}}>Units</span>
            </Typography>
          </Grid>
          <Grid xs={12} lg={4} sm={6} className={classes.otherenergydetail}>
          <Typography className={classes.parametrs}>
                Other Energy Details Real Time
            </Typography>
            <Typography className={classes.data}>
              <span style={{fontSize:'15px'}}>Power Factor</span> {powerFactor} /&nbsp;
              <span style={{fontSize:'15px'}}>Phase Angle</span> {pahseAngle}
            </Typography>
          </Grid>
         <Grid container item xs={12} >
         <Grid item alignItems="center" className={classes.graph}>
          <LineChart
      width={400}
      height={300}
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
        
         
          
         
        
         </Grid>
         <Footer/>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(WeightScale);