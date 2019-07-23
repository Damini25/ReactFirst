import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, combineReducers,applyMiddleware } from 'redux';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import CartReducer from './common/store/Reducers/cartReducer';
import FilterReducer from './common/store/Reducers/filterReducer';

const rootReducers = combineReducers({
    cartReducer: CartReducer,
    filterReducer: FilterReducer
})

const logger = (store) => {
    return (next) => {
        return (action) => {
            console.log('mw1',action,store.getState())
            next(action);
        }
    }
}
const store = createStore(rootReducers,applyMiddleware(logger));

store.subscribe(() => {
    console.log('getState', store.getState());
})

const app = (
    <div>
        <Provider store={store}>
            <App />
        </Provider>
    </div>
);

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
