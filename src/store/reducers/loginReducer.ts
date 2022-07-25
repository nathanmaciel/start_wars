
import * as ACTION_TYPES from '../actions/action_types'

const initialState = {
    expireTime: 0
}

const loginReducer = (state = initialState, action: any) => {
    switch(action.type) {
        case ACTION_TYPES.LOGIN:
            let now = new Date()
            return {
                ...state,
                expireTime: now.getTime() + 1000*60*10
            }
        case ACTION_TYPES.LOGOUT:
            return {
                ...state,
                expireTime: 0
            }
        default:
            return state
    }
}

export default loginReducer