import React from 'react';
import Button from './Button/Button';

function Buttons(props) {
    return (
        <div className="Buttons">
            <Button id="start_stop" class={props.playState ? "fa fa-play stoped": "fa fa-play"} click={props.play}
            />
            <Button id="pause" class={!props.playState ? "fa fa-pause stoped": "fa fa-pause"} click={props.play} />
            <Button id="reset"  class="fa fa-repeat" click={props.reset}/>
            
        </div>
    );
}

export default React.memo(Buttons, (prevProps, nextProps) => {
    if(prevProps.playState !== nextProps.playState){
        return false;
    }else{
        return true;
    }
});