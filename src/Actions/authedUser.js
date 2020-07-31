export const SET_USER = 'SET_USER'
export const CLEAR_USER = 'CLEAR_USER'
export const UPDATE_USER = 'UPDATE_USER'

export function setAuthedUser(userDetails) {
    return {
        type: SET_USER,
        id: userDetails.id,        
        userDetails
    }
}

export function updateAuthedUser(userDetails){
    return {
        type: UPDATE_USER,
        userDetails,
    }
}

export function clearAuthedUser() {
    return {
        type: CLEAR_USER,
        id: null,
        userDetails : null,
    }
}