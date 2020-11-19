// Imports
// React Imports
import React, {useState} from 'react';
// Component Imports
import { Sky } from './components/sky/Sky';
import {EliceQueen} from './components/eliceQueen/EliceQueen';
import { ForeGround1 } from './components/foreGround/ForeGround1';
import { ForeGround2 } from './components/foreGround/ForeGround2';
import { BackGround1 } from './components/backGround/BackGround1';
import { BackGround2 } from './components/backGround/BackGround2';
//Styles Imports
import './App.css';

// App Function
function App() {
  const [increaseSpeed, setIncreaseSpeed] = useState(0);
  return (
    <div onClick={() => setIncreaseSpeed(increaseSpeed+1)} className="container">
      <Sky/>
      <EliceQueen value = {increaseSpeed}/>
      <ForeGround1 value = {increaseSpeed}/>
      <ForeGround2 value = {increaseSpeed}/>
      <BackGround1 value = {increaseSpeed}/>
      <BackGround2 value = {increaseSpeed}/>
    </div>
  );
}

export default App;
