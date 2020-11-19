// imports
// React Imports
import React, {useEffect, useState} from 'react';
// Images Imports
import r_pawn_small from '../../images/r_pawn_small.png';
import r_knight_small from '../../images/r_knight_small.png';
import palm2_small from '../../images/palm2_small.png';
// WebAnimations Imports
import useWebAnimations from "@wellyshen/use-web-animations";
// Styles Imports
import './BackGround.css'

export const BackGround2 = (props) => {
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
            duration: 20000,
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
        <div className="scenery background2" ref={ref}>
            <img className="r_pawn" src={r_pawn_small} alt="pawn in background"/>
            <img className="r_knight" src={r_knight_small} alt="knight in background"/>
            <img className="palm2" src={palm2_small} alt="palm in background"/>
        </div>
    )
}
