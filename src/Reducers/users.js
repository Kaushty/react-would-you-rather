import { RECEIVE_USERS } from '../Actions/users'

// Reducer to perform on actions created for users
export default function users(state = {}, action) {
    switch(action.type){
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users,
            };        
        default :
            return state
    }

}