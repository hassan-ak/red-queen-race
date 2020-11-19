// imports
// React Imports
import React, {useEffect, useState} from 'react';
// Images Imports
import palm3_small from '../../images/palm3_small.png';
// WebAnimations Imports
import useWebAnimations from "@wellyshen/use-web-animations";
// Styles Imports
import './ForeGround.css';

export const ForeGround1 = (props) => {
  // usestate for using condition for speedup
  const [speedUp, setSpeedUp] = useState(props.value);
  // Update value of speed up when onclick Functions execute to change value of props
  useEffect(() => {
    return () => {
      setSpeedUp(props.value)
    }
  }, [props.value])      
  // WebAnimations definantions
  const { ref, playState, getAnimation } = useWebAnimations({
    keyframes:[
      { transform: 'translateX(100%)' },
      { transform: 'translateX(-100%)' }    
    ],
    timing: { 
      duration: 10000,
      iterations: Infinity,
      playbackRate: 1,
    }
  })
  // check if animations is runnig or not and update playback rate
  if(playState==="running"){
    var animation = getAnimation();
    //Increase playback rate based upon click
    if (speedUp > 0){
      animation.updatePlaybackRate(animation.playbackRate += 0.1);
      setInterval(() => {
        setSpeedUp(0)
      }, 3000);
    }else{
      //Decrease playback rate after particular interval
      setInterval( function () {
        if (animation.playbackRate > 0.4) {
          animation.updatePlaybackRate(animation.playbackRate -= 0.1);
        }
      },10000)
    }
  }          
  return (
    <div className ="scenery foreground1" ref={ref}>
      <img className= "palm3" src={palm3_small} alt="Palm Tree in fore-ground"/>
    </div>
  )
}