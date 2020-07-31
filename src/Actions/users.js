export const RECEIVE_USERS = 'RECEIVE_USERS';
export const ADD_ANSWER = 'ADD_ANSWER';
export const ADD_USER_QUESTION = 'ADD_USER_QUESTION';

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users,
    }
}

export function addUserQuestion(question, authedUser) {
    return {
        type: ADD_USER_QUESTION,
        authedUser,
        question,
    }
}

export function addAnswer(authedUser, qid, answer) {
    return {
        type: ADD_ANSWER,
        authedUser,
        answer,
        qid,
    }
}