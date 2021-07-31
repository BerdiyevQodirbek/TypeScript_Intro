import * as actionTypes from '../actionTypes'

export const signInAction = (data) => {
    return {
        type: actonTypes.AUTH_SIGN_IN,
        data
    }
}

export const signUpAction = (data) => {
    return {
        type: actonTypes.AUTH_SIGN_UP,
        data
    }
}

export const signInAction = () => {
    return {
        type: actonTypes.AUTH_SIGN_OUT,
    }
}