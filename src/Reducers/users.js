import { RECEIVE_USERS, ADD_ANSWER, ADD_USER_QUESTION } from '../Actions/users'

// Reducer to perform on actions created for users
export default function users(state = {}, action) {
    switch(action.type){
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users,
            };        
        case ADD_ANSWER:
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    answers: {
                        ...state[action.authedUser].answers,
                        [action.qid]: action.answer,
                    }
                }
            };  
        case ADD_USER_QUESTION:
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    questions: state[action.authedUser].questions.concat([action.question.id])
                }
            }         
        default :
            return state
    }

}