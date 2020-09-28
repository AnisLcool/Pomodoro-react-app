import React, { Component } from 'react';
import Buttons from '../components/Buttons/Buttons';
import Labels from '../components/Labels/Labels';
import Timer from '../components/Timer/Timer';
import "./Pomodoro.css";
const defaultState = {
    sessionLength: 25,
    breakLength: 5,
    timer: {
        minutes: 25,
        seconds: 0
    }
    ,
    play : false,
    setssionTimer: true
    
}
class Pomodoro extends Component {
    state = {
        sessionLength : 25,
        breakLength: 5,
        timer: {
            minutes: 25,
            seconds: 0
        },
        play : false,
        sessionTimer: true,
       
    }

    timerInterval = 0;

    checkStateValue = (val, op) => {
        if(val === 1 && op === "dec"){
            return false
        }else if(val === 60 && op === "inc"){
            return false
        }else{
            return true
        }
        
    }

    setStateHandler = (stateType, operation) => {
        // console.log("setStateHandler :", stateType, operation)
        this.setState(prevState => {
            if(!this.checkStateValue(prevState[stateType], operation)){
                return prevState
            }
           const newLength = operation === "inc" ? prevState[stateType] + 1 : prevState[stateType] - 1;
           const newTimer = prevState.sessionTimer && stateType === "sessionLength" ? 
           {minutes: newLength, seconds: 0} : !prevState.sessionTimer && stateType === "breakLength" ? 
           {minutes : newLength, seconds : 0} : {minutes: prevState.timer.minutes, seconds : prevState.timer.seconds};
           console.log("sessionTImer : ", prevState.sessionTimer, " stateType: ", stateType)
            return{
                [stateType]: newLength,
                timer:newTimer
            }
        })

    }

    countersHandler = (type, operation) => {
        // console.log("countersHandler clicked, ",type, operation)
        if(this.state.play){
            return
        }
        if(type === "session"){
            this.setStateHandler("sessionLength", operation)
        }else{
            this.setStateHandler("breakLength", operation);
        }
    }

    resetTimerHandler = () => {
        console.log("resetTimeHandler")
        this.setState(defaultState)
        clearInterval(this.timerInterval)
    }

    startTimerHandler = () => {
        const togglePlay = !this.state.play;
        this.setState({play: togglePlay});           
                const setTime = () => {
                    this.setState(prevState => {
                        if(prevState.timer.minutes === 0  && prevState.timer.seconds === 0){
                            return{
                                sessionTimer: !prevState.sessionTimer,
                                timer:{
                                    minutes: !prevState.sessionTimer ? prevState.sessionLength : prevState.breakLength,
                                    seconds: 0
                                }
                            }
                            
                        }
                        else if(prevState.timer.seconds === 0){
                            return{
                                timer : {
                                    minutes: prevState.timer.minutes - 1 ,
                                    seconds: 59
                                }
                            }
                        }else{
                            return{
                                timer : {
                                    minutes: prevState.timer.minutes ,
                                    seconds: prevState.timer.seconds - 1
                                }
                            }
                    }
                    })
                }
               
                if(togglePlay){
                    this.timerInterval = setInterval(setTime, 1000);
                }else{
                        clearInterval(this.timerInterval);
                }
                
    }
    render() {
        return (
            <div className="Pomodoro">
                <h1>25 + 5 Clock</h1>
                <Labels breakLength={this.state.breakLength} sessionLength={this.state.sessionLength}
                countersHandler={this.countersHandler} />
                <Timer timerState={this.state.timer} sessionTimer={this.state.sessionTimer} 
                />
                <Buttons play={this.startTimerHandler} reset={this.resetTimerHandler}/>
            </div>
        );
    }
}

export default Pomodoro;