import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers';
import {createLogger} from 'redux-logger';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const loggerMiddleware = createLogger();
const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);

ReactDOM.render(
    (<Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    ),document.getElementById('root')
);
