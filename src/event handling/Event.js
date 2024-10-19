import React from 'react';
import './event.css';

function ButtonClick() {

    console.log("Button is Clicked!");
    alert("Button is Clicked!");

}

export default function Event(){

return (
        <div className= "event">
            <h1>React Event Handling</h1>
            <br /><hr />
            <button className="button" onClick = {ButtonClick}>Click here</button>

        </div>
    );
};


