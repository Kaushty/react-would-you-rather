// import { getUser } from "../Utils/api";
import { receiveUsers } from "./users";
import { getUsers } from "../Utils/api";
import { showLoading, HideLoading, hideLoading } from 'react-redux-loading-bar'
// import { setAuthedUser } from './authedUser';

// const authedUser = 'tylermcginnis'

// Action to make async call to API 
export function handleInitialData() {
    return (dispatch) => {
        // Aync call to get all users and questions and save it to the store.
        dispatch(showLoading())
        Promise.all([
            getUsers(),]
        ).then(([users, userDetails]) => {
            dispatch(receiveUsers(users));
            dispatch(hideLoading())
        })
    }
}