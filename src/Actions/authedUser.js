export const SET_USER = 'SET_USER';
export const CLEAR_USER = 'CLEAR_USER'

export function setAuthedUser(userDetails) {
    return {
        type: SET_USER,
        id: userDetails.id,        
        userDetails
    }
}

export function clearAuthedUser() {
    return {
        type: CLEAR_USER,
        id: null,
        userDetails : null,
    }
}