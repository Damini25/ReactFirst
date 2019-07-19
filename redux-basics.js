/* 
Independent redux file to be used with node so added node syntax
*/
const redux = require('redux');
const createStore = redux.createStore;
//initialize state
const initialState = {
    counter: 0
}
//reducer
const rootReducer = (state = initialState, action) => {
    if (action.type === 'INC_Counter') {
        return { ...state, counter: state.counter + 1 }
    }
    if (action.type === 'ADD_Counter') {
        return { ...state, counter: state.counter + action.value }
    }
    return state;
};
//store
const store = createStore(rootReducer);
console.log("state", store.getState());

//subscription
store.subscribe(()=>{
    console.log('subscription',store.getState())
})

//dispatch action
store.dispatch({ type: 'INC_Counter' });
store.dispatch({ type: 'ADD_Counter', value: 1 })
console.log("state", store.getState());

