import React, { Component } from 'react';
import Buttons from '../components/Buttons/Buttons';
import Labels from '../components/Labels/Labels';
import Timer from '../components/Timer/Timer';
import "./Pomodoro.css";
class Pomodoro extends Component {
    render() {
        return (
            <div className="Pomodoro">
                <h1>25 + 5 Clock</h1>
                <Labels />
                <Timer />
                <Buttons />
            </div>
        );
    }
}

export default Pomodoro;