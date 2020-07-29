export const RECEIVE_USERS = 'RECEIVE_USERS';
export const LOAD_USER = 'LOAD_USER';

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users,
    }
}