/** 
 * Check if value is undefined 
 * @param {any}
 * @return {Boolean}
 * */
function isUndefined(thing) {
    return typeof thing === "undefined";
}

/** Create a reducer in functional way
 * @param {any} - initial state could be anything
 * @param {Object} - an object with ACTION_TYPE on key and function on the value. Each function are passed the action object and state to the argument.
 * @example const counter = createReducer(0, {
 *     INCREMENT: (action, state) => state + 1,
 *     DECREMENT: (action, state) => state - 1,
 *     RESET: (action, state) => 0,
 *     SET_VALUE: (action, state) => action
 * })
 */
module.exports = function createReducer(initialState, handlers) {
    if (isUndefined(initialState) || isUndefined(handlers)) {
        console.warn(
            "You didn't pass initialState and handlers to parameter. Please refer to documentation."
        );
    }

    return function(state, action) {
        if (isUndefined(state)) state = initialState;
        return handlers.hasOwnProperty(action.type)
            ? handlers[action.type](action, state)
            : state;
    };
};
