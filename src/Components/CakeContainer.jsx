import React from 'react';
import { connect } from 'react-redux';
import { buyCakes } from '../redux';

function CakeContainer(props) {
    return (
        <div>
            <h1>Number of Cakes:{props.numberOfCakes}</h1>
            <button onClick={props.buyCake}>Buy A Cake</button>
        </div>
    )
}
//step1 - use store as props 
const mapStateToProps = state => {
    return {
        numberOfCakes: state.numberOfCakes
    }
}
//step2 - map actioncreator to the props and helps to dispatch an action

const mapDispatchToProps = disptach => {
    return {
        buyCake: () => { disptach(buyCakes()) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
