// import { getUser } from "../Utils/api";
import { receiveUsers } from "./users";
import { getUsers, getQuestions } from "../Utils/api";
import { showLoading, hideLoading } from 'react-redux-loading-bar'
import { receiveQuestions } from "./questions";

// Action to make async call to API 
export function handleInitialData() {
    return (dispatch) => {
        // Aync call to get all users and questions and save it to the store.
        dispatch(showLoading())
        Promise.all([
            getUsers(),
            getQuestions()]
        ).then(([users, questions]) => {
            dispatch(receiveUsers(users));
            dispatch(receiveQuestions(questions))
            dispatch(hideLoading())
        })
    }
}