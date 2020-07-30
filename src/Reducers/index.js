import users from './users'
import authedUser from './authedUser'
import questions from './questions'
import {combineReducers} from 'redux'

export default combineReducers({
    users,
    questions,
    authedUser,
})