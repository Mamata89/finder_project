import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import { Provider } from 'react-redux'
import configureStore from './redux/store/configureStore'
import { getCurrentUser } from './redux/actions/users'
import {StartGetTasks } from './redux/actions/tasks'

const store =configureStore()
store.subscribe( () => {
    console.log(store.getState(),'subscribe')
})

console.log(store.getState())

store.dispatch( StartGetTasks() ) //for geting all the tasks data, this wont go even if we refresh

if(localStorage.getItem('token')) {
    store.dispatch(getCurrentUser()) //for geting user data,this wont go even if we refresh
}

const jsx = (
    <Provider store={store}>
        <App/>
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'));


