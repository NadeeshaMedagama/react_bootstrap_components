import React from 'react';
import './topicBox.css';

export default function TopicBox(props)  {
    // const food  ="My favourite food is Rice";
    // const food2 = " and Curry.";
    return (

        <div>
            <div className="topicBox">
                {/*<span className="text">This is the Topic. {food} {food2} </span>*/}
                <span className="text">My favourite food is {props.food} and price is {props.price} </span>
            </div>

        </div>
    );
};