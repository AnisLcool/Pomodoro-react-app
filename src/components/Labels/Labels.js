import React from 'react';
import Button from '../Buttons/Button/Button';
import "./Labels.css";

function Labels(props) {
    return (
        <div className="labels">
            <div className="label-section">
                <label>Break Length</label>
                <div>
                    <Button value="Down" class="fa fa-arrow-down"/>
                    <p>5</p>
                    <Button value="Up" class="fa fa-arrow-up"/>
                </div>
            </div>

            <div className="label-section">
                <label>Session Length</label>
                <div>
                <Button value="Up" class="fa fa-arrow-down"/>
                    <p>25</p>
                <Button value="Up" class="fa fa-arrow-up"/>
                </div>
            </div>
            
        </div>
    );
}

export default Labels;