import React from 'react';
import "./Timer.css";
function Timer(props) {
    return (
        <div id="timer">
            <label id="timer-label">Session</label>
            <div id="time-left">25:00</div>
        </div>
    );
}

export default Timer;