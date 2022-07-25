import * as ACTION_TYPES from '../actions/action_types'

const initialState = {
    empty: true
}

const chacheReducer = (state = initialState, action: any) => {
    if(action.type == ACTION_TYPES.CACHE){
        return {
            ...state,
            data: action.payload
        }
    }
    return state
}

export default chacheReducer