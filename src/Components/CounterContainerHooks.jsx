import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { decrementCounter, incrementCounter, resetCounter } from '../redux';

function CounterContainerHooks() {
    const counterValue = useSelector((state) => state.counterValue)

    const dispatch = useDispatch()
    return (<div>
        <h1>Counter Value:{counterValue}</h1>
        <button onClick={() => dispatch(incrementCounter())}>Increment</button>
        <button onClick={() => dispatch(decrementCounter())}>Decrement</button>
        <button onClick={() => dispatch(resetCounter())}>Reset</button>

    </div>)
}

export default CounterContainerHooks;
