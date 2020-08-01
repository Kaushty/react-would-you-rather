import users from './users'
import authedUser from './authedUser'
import questions from './questions'
import {combineReducers} from 'redux'

import { loadingBarReducer } from 'react-redux-loading-bar'

export default combineReducers({
    users,
    questions,
    authedUser,
    loadingBar: loadingBarReducer,
})