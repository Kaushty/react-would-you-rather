import { SET_USER, CLEAR_USER, UPDATE_USER } from '../Actions/authedUser'

export default function authedUser(state = {}, action) {
    switch(action.type) {
        case SET_USER:
            return {
                ...state,
                id: action.id,
                userDetails: action.userDetails,           
            }
            
        case CLEAR_USER:
            return {
                ...state,
                id: action.id,
                userDetails: action.userDetails,             
            }       

        case UPDATE_USER:
            return {
                ...state,
                userDetails: action.userDetails
            }

        default: 
            return state
    }
}