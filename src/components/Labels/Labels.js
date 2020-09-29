import React from 'react';
import Button from '../Buttons/Button/Button';
import "./Labels.css";

function Labels({ breakLength, sessionLength, countersHandler }) {
    return (
        <div className="labels">
            <div className="label-section">
                <label id="break-label">Break Length</label>
                <div>
                    <Button value="Down" class="fa fa-arrow-down" id="break-decrement" click={() => countersHandler("break", "dec")}/>
                    <p id="break-length">{breakLength}</p>
                    <Button value="Up" class="fa fa-arrow-up" id="break-increment" 
                    click={() => countersHandler("break", "inc")}/>
                </div>
            </div>

            <div className="label-section">
                <label id="session-label">Session Length</label>
                <div>
                    <Button value="Down" class="fa fa-arrow-down" id="session-decrement"
                    click={() => countersHandler("session", "dec")}/>
                    <p id="session-length">{sessionLength}</p>
                    <Button value="Up" class="fa fa-arrow-up" id="session-increment"
                    click={() => countersHandler("session", "inc")}/>
                </div>
            </div>

        </div>
    );
}

export default React.memo(Labels , (prevProps, nextProps) => {
    if(prevProps.breakLength !== nextProps.breakLength || prevProps.sessionLength !== nextProps.sessionLength){
        return false
    }else{
        return true
    }
});