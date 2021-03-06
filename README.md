# Functional Redux

Create a reducer in functional way
@param {any} - initial state could be anything
@param {Object} - an object with ACTION_TYPE on key and function on the value. Each function are passed the action object and state to the argument.
 
```javascript
import createReducer from "redux-functional";

// helpers
const addOne = (action, state) => state + 1;
const removeOne = (action, state) => state - 1;
const alwaysZero = () => 0;
const identity = action => action.payload;

const initialState = 0;

const handlers = {
    INCREMENT: addOne,
    DECREMENT: removeOne,
    RESET: alwaysZero,
    SET_VALUE: identity,
};

const counter = createReducer(initialState, handlers);

// later

const store = createStore(counter);

const incrementCounter = { type: "INCREMENT" };
const decrementCounter = { type: "DECREMENT" };
const resetCounter = { type: "RESET" };
const setCounterValue = payload => {
    type: "RESET", payload;
};

store.dispatch(incrementCounter); // state = 1
store.dispatch(incrementCounter); // state = 2
store.dispatch(incrementCounter); // state = 3
store.dispatch(decrementCounter); // state = 2
store.dispatch(resetCounter); // state = 0
store.dispatch(setCounterValue(7)); // state = 7
```