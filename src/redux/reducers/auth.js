import * as actionTypes from '../actionTypes'

const initialState = {
    user: {},
    token: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_SIGN_IN || actionTypes.AUTH_SIGN_UP:
            return {
                ...state,
                token: action.payload.token,
                user: action.payload.user
            }
        case actionTypes.AUTH_SIGN_OUT:
            return initialState
        default:
            return state;
    }
}


export default authReducer;