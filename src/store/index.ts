import { combineReducers } from "@reduxjs/toolkit";
import chacheReducer from "./reducers/cacheReducer";
import loginReducer from "./reducers/loginReducer";

const reducers = combineReducers({
    login: loginReducer,
    cache: chacheReducer
})

export default reducers

export type State = ReturnType<typeof reducers>