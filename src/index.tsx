import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import 'antd/dist/antd.css';
import './index.css';

import loggerMiddleware from './middleware/logger'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'

import { rootReducer } from './_reducers'

import { configurePusher } from 'pusher-redux'

const middlewareEnhancer = applyMiddleware(loggerMiddleware, thunkMiddleware)

const composedEnhancers = compose(middlewareEnhancer)

// Pusher Config
const options={cluster:'us2'}

// pish-development API_KEY
const API_KEY='YOUR_API_KEY_HERE'
const store = createStore(rootReducer, undefined, composedEnhancers)
configurePusher(store, API_KEY, options)


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
