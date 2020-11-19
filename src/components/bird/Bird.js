// imports
// React Imports
import React, {useEffect, useState} from 'react';
// Images Imports
import mybird from '../../images/mybird.gif';
// WebAnimations Imports
import useWebAnimations from "@wellyshen/use-web-animations";
// Styles Imports
import './Bird.css'

export const Bird = (props) => {
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
            { transform: 'translate(-100%,50px)'},
            { transform: 'translate(100%,10px)'},   
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
            animation.updatePlaybackRate(animation.playbackRate += 0.009);
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
        <div ref={ref}>
            <img className="mybird" src={mybird} alt="Flyig bird one"/>
        </div>
    )
}