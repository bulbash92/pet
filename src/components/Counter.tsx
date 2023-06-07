import {useState} from "react";
import classes from './counter.module.scss'

export const Counter = () => {
    const [counter, setCounter] = useState<number>(0)
    return (
        <div className={classes.button}>
            <h1>{counter} </h1>
            <button onClick={()=>setCounter(prev => prev+1)}>+1</button>
        </div>
    );
};
