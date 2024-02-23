import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../ducks/counter";
//import { selectCount } from '../ducks/counter';
import { selectCounter } from '../ducks/counter';

const Counter = () => {
//    const count = useSelector((state) => state.counter.value);
//    const count = useSelector(selectCount);
    const count = useSelector(selectCounter);
    const dispatch = useDispatch();

    return (
        <div className="redux__counter" style={{ display: 'flex', alignItems: 'center' }}>
            <button
                style={{ marginLeft: '2vw'}}
                onClick={() => dispatch(increment({count}))}>Increment
            </button>
            <button
                style={{ marginLeft: '2vw'}}
                onClick={() => dispatch(decrement({count}))}>Decrement
            </button>
            <button
                style={{ marginLeft: '2vw'}}
                onClick={() => dispatch(reset({count}))}>Reset
            </button>
            <p style={{ paddingLeft: '5vw'}}>Counter Value: {count}</p>
        </div>
    );
};

export default Counter;
