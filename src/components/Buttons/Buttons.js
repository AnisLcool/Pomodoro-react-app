import React from 'react';
import Button from './Button/Button';

function Buttons(props) {
    return (
        <div className="Buttons">
            <Button class="fa fa-play"/>
            <Button class="fa fa-pause"/>
            <Button  class="fa fa-repeat"/>
            
        </div>
    );
}

export default Buttons;