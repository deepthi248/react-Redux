import { createStore } from "redux";
import cakeReducer from "./cakes/cakeReducer";
import counterReducer from "./Counter/counterReducer";


const store = createStore(counterReducer)
export default store