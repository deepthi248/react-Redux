import redux from redux;
import { createStore } from "redux";
import { applyMiddleware } from "redux";
import { ThunkMiddleware } from "redux-thunk";
import axios from "axios";
//store 
const initalState = {
    loading: false,
    users: [],
    error: ''
}

//action creaters  
const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'
const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE'

const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_DATA
    }
}
const fetchUsersSuccess = users => {
    return {
        type: FETCH_DATA_SUCCESS,
        payload: users
    }
}
const fetUsersFailure = error => {
    return {
        type: FETCH_DATA_FAILURE,
        payload: error
    }
}


//reducer 

const reducer = (state = intialState, action) => {
    switch (action.type) {
        case 'FETCH_USERS_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'FETCH_DATA_SUCCESS': {
            return {
                ...state,
                loading: false,
                users: action.payload,
                error: ''
            }
        }
        case 'FETCH_DATA_FAILURE': {
            return {
                ...state,
                loading: false,
                users: [],
                error: action.payload
            }
        }
    }
}

const store = createStore(reducer, applyMiddleware(ThunkMiddleware))

