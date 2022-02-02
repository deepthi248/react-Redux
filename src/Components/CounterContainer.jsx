import React from 'react';
import { connect } from 'react-redux';
import { decrementCounter, incrementCounter, resetCounter } from '../redux';

function CounterContainer(props) {
    console.log(decrementCounter, incrementCounter, resetCounter);
    return (
        <div>
            <h1>Counter Value:{props.counterValue}</h1>
            <button onClick={props.Increment}>Increment</button>
            <button onClick={props.Decrement}>Decrement</button>
            <button onClick={props.Reset}>Reset</button>
        </div>
    )
}

//mapping the state 
const mapStateToProps = (state) => {

    return {
        counterValue: state.counterValue
    }
}
const mapActionToProps = dispatch => {
    return {
        Increment: () => dispatch(incrementCounter()),
        Decrement: () => dispatch(decrementCounter()),
        Reset: () => dispatch(resetCounter())
    }
}

export default connect(mapStateToProps, mapActionToProps)(CounterContainer);
