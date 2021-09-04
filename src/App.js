import React, {Component} from "react";
import Home from "./Pages/Home";
import EnergyMeter from "./Pages/EnergyMeter";
import MotionDetector from "./Pages/MotionDetector";
import TempHimidityMeter from "./Pages/TemHumidityMeter";
import WaterFlow from "./Pages/WaterFlow";
import BrighnessMeter from "./Pages/BrightnessMeter";
import WeightScale from "./Pages/WeightScale";
import Navbar2 from "./components/Navbar/navbar2";
import Topbar from "./Topbar/Topbar";
import {
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
class App extends  Component{
 

  render(){
    return(
      <main>
        <Topbar/>
        <Navbar2/>
        <Switch>
          <Route path='/' exact>
            <EnergyMeter/>
          </Route>
          <Route path='/energy-meter' exact>
            <EnergyMeter/>
          </Route>
          <Route path='/brightness-meter' exact>
            <BrighnessMeter/>
          </Route>
          <Route path='/motion-detector' exact>
            <MotionDetector/>
          </Route>
          <Route path='/temp-humidity-meter' exact>
            <TempHimidityMeter/>
          </Route>
          <Route path='/water-flow' exact>
            <WaterFlow/>
          </Route>
          <Route path='/weight-scale' exact>
            <WeightScale/>
          </Route>
        </Switch>
      </main>
    )
  }
}

export default App;
