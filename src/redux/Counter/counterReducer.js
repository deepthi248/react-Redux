import { DECREMENT, INCREMENT, RESET } from "./counterActionTypes"

const intialState = {
    counterValue: 10
}
const counterReducer = (state = intialState, action) => {
    console.log("inside the counterReducer", action.type);
    switch (action.type) {
        case INCREMENT: return {
            ...state,
            counterValue: state.counterValue + 1
        }
        case DECREMENT: return {
            ...state,
            counterValue: state.counterValue - 1
        }
        case RESET: return {
            ...state,
            counterValue: 0
        }
        default:
            return state;
    }
}
export default counterReducer