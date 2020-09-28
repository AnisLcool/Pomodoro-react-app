import React from 'react';
import Button from './Button/Button';

function Buttons(props) {
    return (
        <div className="Buttons">
            <Button id="start_stop" class="fa fa-play" click={props.play}/>
            <Button id="pause" class="fa fa-pause"/>
            <Button id="reset"  class="fa fa-repeat" click={props.reset}/>
            
        </div>
    );
}

export default Buttons;