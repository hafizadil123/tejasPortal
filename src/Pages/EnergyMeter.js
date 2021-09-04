import React, {Component} from "react";
import { withStyles} from '@material-ui/core/styles';
import {Grid} from '@material-ui/core'
import { Typography } from "@material-ui/core";
import { NavLink } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import Footer from './footer';
import axios from 'axios';
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
    marginTop:'68px',
    height:'83px',
   
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
  parametrs:{
    fontFamily:'Roboto,sans-serif !important',
    fontSize:'1.2rem',
    fontWeight: '200',
    '@media(max-width:768px)': {
      fontSize:'.9rem', 
      fontWeight:'100',   }

  },
voltage:{
  marginLeft:'5rem',
  '@media(max-width:768px)': {
    marginLeft:'0rem',    },
    '@media(min-width:900px) and (max-width:1100px)': {
      marginLeft:'5rem',    },
},
  data:{
    fontSize:'1.5rem',
    fontWeight:'700',
    borderBottom:'1px solid #B0BBB6',
    '@media(max-width:768px)': {
      fontSize:'1rem', 
   }
  },
  datacontainer:{}, 
  energyconsumed:{
    
    marginLeft:'5rem',
    '@media(max-width:768px)': {
      marginLeft:'0rem',    },
      '@media(min-width:900px) and (max-width:1100px)': {
        marginLeft:'5rem',    }
  },
  thisweek:{
    '@media(min-width:900px) and (max-width:1100px)': {
      marginLeft:'0px',    }
  },
  today:{
    marginLeft:'5rem',
    '@media(max-width:768px)': {
      marginLeft:'0rem',    },
  },
  graph:{
    marginTop:'5.3rem',
    marginLeft:'350px',
    '@media(max-width:768px)': {
      marginLeft:'0px' ,},
      '@media(min-width:900px) and (max-width:1100px)': {
        marginLeft:'290px',    }
  }
}
const apiUrl = 'http://68.183.86.27/api/getTWMYData';
class EnergyMeter extends  Component{
  constructor(props){
    super(props)
    this.state={
      devicesActive:1,
      devicesInActive:0,
      volts:235.3,
      current:5.35,
      power:1535,
      frequency:50.05,
      energyConsumedWeekly:84.1,
      energyConsumedMonthly:232.8,
      powerFactor:0.95,
      pahseAngle:357.6,
      energyConsumed:143.01,
      energyConsumedDaily:10.2,
      lastUpdate:'15/06/2021  21:38:32',
    }
  }
  componentDidMount() {
    axios.get(apiUrl)
      .then(res => {
        console.log(res);
        const { data: { energy_meter_1 = {} } = {}  } = res.data || {};
        console.log('ress', energy_meter_1);
        const { 
          consumed_energy,
          current: apiCurrent,
          frequency: apiFrequency,
          month_consumed_energy,
          ping_datetime,
          power: apiPower,
          powerFactor: apiPowerFactor,
          today_consumed_energy,
          voltage,
          week_consumed_energy,
        } = energy_meter_1 || {}
        this.setState({
          devicesActive:1,
          devicesInActive:0,
          volts: voltage,
          current:apiCurrent,
          power: apiPower,
          frequency:apiFrequency,
          energyConsumedWeekly:week_consumed_energy,
          energyConsumedMonthly:month_consumed_energy,
          powerFactor: apiPowerFactor,
          energyConsumed:consumed_energy,
          energyConsumedDaily:today_consumed_energy,
          lastUpdate: ping_datetime,
        });
      })
      .catch(err => {
        console.log('failed to fetch data', err);
      });
  }
  render(){
    const {classes}=this.props
    const{devicesActive,
      devicesInActive,
      volts,
      current,
      power,
      frequency,
      energyConsumedMonthly,
      powerFactor,
      energyConsumed,
      energyConsumedDaily,
      energyConsumedWeekly,
      lastUpdate, 
    }=this.state;
  
    console.log('aaa', this.state);
    return(
      <div className={classes.root}>
        
        
        <Grid container spacing={1} >
        <Grid xs={12} md={7} lg={7} className={classes.devices} justifyContent="center">
          <div className={classes.fontrealtime}>
              <NavLink style={{textDecoration:'none',color:'inherit',
              borderBottom:'1px solid #B0BBB6', padding:'10px'}}
               to='/energy-meter'>Energy Meter-Location:Office, Navy Mumbai</NavLink>
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
          <Grid item xs={4} lg={2} sm={4} md={2} className={classes.voltage}>
          <Typography className={classes.parametrs}>
              Voltage
            </Typography>
            <Typography className={classes.data}>
              {volts} <span style={{fontSize:'15px'}}>Volts</span>
            </Typography>
          </Grid>
          <Grid item xs={4} lg={2} sm={4} md={2} className={classes.datacontainer}>
          <Typography className={classes.parametrs}>
              Current
            </Typography>
            <Typography className={classes.data}>
              {current} <span style={{fontSize:'15px'}}>Amps</span>
            </Typography>
          </Grid>
          <Grid item xs={4} lg={2} sm={4} md={2} className={classes.datacontainer}>
          <Typography className={classes.parametrs}>
              Power
          </Typography>
          <Typography className={classes.data}>
              {power} <span style={{fontSize:'15px'}}>watts</span>
          </Typography>
          </Grid>
          <Grid item xs={4} lg={2} sm={4} md={2} className={classes.datacontainer}>
          <Typography className={classes.parametrs}>
              Frequency
            </Typography>
            <Typography className={classes.data}>
              {frequency} <span style={{fontSize:'15px'}}>Hz</span>
            </Typography>
          </Grid>
          <Grid item xs={8} lg={2} sm={4} md={2} className={classes.datacontainer}>
          <Typography className={classes.parametrs} >
              Power Factor
            </Typography>
            <Typography className={classes.data}>
              {powerFactor} <span style={{fontSize:'15px'}}>watts</span>
            </Typography>
          </Grid>
          
          {/* bottom  */}
          

          <Grid item xs={12} >
            <div className={classes.realTimeData}>
                Energy Consumed
            </div>
          </Grid>
          <Grid item xs={4} lg={2} sm={4} className={classes.today}>
          <Typography className={classes.parametrs}>
                Today
            </Typography>
            <Typography className={classes.data}>
              {energyConsumedDaily} 
            </Typography>
          </Grid>
          <Grid item xs={3} lg={2} sm={4} className={classes.thisweek}>
          <Typography className={classes.parametrs}>
                This Week
            </Typography>
            <Typography className={classes.data}>
              {energyConsumedWeekly}
            </Typography>
          </Grid>
          <Grid item xs={4} lg={2} sm={4} className={classes.datacontainer}>
          <Typography className={classes.parametrs}>
              This Month
            </Typography>
            <Typography className={classes.data}>
              {energyConsumedMonthly}
            </Typography>
          </Grid>
          
          <Grid item xs={12} lg={1} sm={6}>
          </Grid>
          <Grid item xs={12} lg={1} sm={6}>
          </Grid>
          <Grid item xs={12} lg={3} sm={6}></Grid>
          <Grid item xs={12}></Grid>
         
          
          <Grid container item xs={12}  alignItems="center" spacing={3}  >
            <Grid item xs={12} className={classes.graph}>
            <LineChart
      width={400}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
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
          <Grid item xs={12}></Grid>
          <Grid item xs={12}></Grid>
          <Footer/>
         
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(EnergyMeter);