import * as ACTION_TYPES from './action_types'

export const LOGIN = {
    type: ACTION_TYPES.LOGIN
}

export const LOGOUT = {
    type: ACTION_TYPES.LOGOUT
}

export const cacheData = (data: any) => {
    return {
        type: ACTION_TYPES.CACHE,
        payload: data
    }
}