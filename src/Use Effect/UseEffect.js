import React, {useState, useEffect} from 'react';
import './useEffect.css';

export default function UseEffect()  {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    useEffect(() => {
        console.log (`New count is ${count}`);
    }, [count]
    )

    return (
        <div className="useEffect">

            <br/><br/>
            <h1 className= "count">Count : {count}</h1><br/>
            <button className= "buttons" onClick={decrement}>
                <span className= "symbol">[-]</span></button>
            &nbsp;&nbsp;
            <button className= "buttons" onClick={increment}>
                <span className= "symbol">[+]</span></button>
            <br/><br/><br/>

        </div>
    );
};


