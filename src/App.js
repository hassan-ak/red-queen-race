// Imports
// React Imports
import React, {useState} from 'react';
// Component Imports
import { Sky } from './components/sky/Sky';
import {EliceQueen} from './components/eliceQueen/EliceQueen';
//Styles Imports
import './App.css';

// App Function
function App() {
  const [increaseSpeed, setIncreaseSpeed] = useState(0);
  return (
    <div onClick={() => setIncreaseSpeed(increaseSpeed+1)}>
      <Sky/>
      <EliceQueen value = {increaseSpeed}/>
    </div>
  );
}

export default App;
