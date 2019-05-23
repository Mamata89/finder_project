import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import usersReducers from '../reducers/users'
import categoriesReducers from '../reducers/categories'
import locationsReducers from '../reducers/locations'
import tasksReducers from '../reducers/tasks'

const configureStore = () => {
    const store = createStore(combineReducers({
        user:usersReducers,
        categories:categoriesReducers,
        locations:locationsReducers,
        tasks:tasksReducers
    }),applyMiddleware(thunk))
    return store
}

export default configureStore