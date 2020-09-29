import React from 'react';
import "./Timer.css";
function Timer(props) {
    return (
        <div id="timer">
            <label id="timer-label">{props.sessionTimer ? "Session" :"Break"}</label>
            <div id="time-left">{props.timerState.minutes + ":" + (props.timerState.seconds < 10 ? "0" + props.timerState.seconds : props.timerState.seconds)}</div>
        </div>
    );
}

export default Timer;