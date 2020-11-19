// imports
// React Imports
import React,{useState, useEffect} from 'react';
// Images Imports
import sprite_running_alice_queen_small from '../../images/sprite_running-alice-queen_small.png';
// WebAnimations Imports
import useWebAnimations from "@wellyshen/use-web-animations";
// Styles Imports
import './EliceQueen.css';

export const EliceQueen = (props) => {
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
            { transform: 'translateY(0)' },
            { transform: 'translateY(-100%)' }   
        ],
        timing: { 
            easing: 'steps(7, end)',
            direction: "reverse",
            duration: 400,
            playbackRate: 1,
            iterations: Infinity
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
        <div className="earth">
            <div className="alice">
                <img ref={ref} src={sprite_running_alice_queen_small} alt=" " className="aliceImag"/>
            </div>
        </div>
    );
}
