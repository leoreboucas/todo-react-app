import { combineReducers } from 'redux'

import todoReducer from '../../todo/reducers/todoReducer'

const rootReducers = combineReducers({
    todo: todoReducer
})

export default rootReducers;