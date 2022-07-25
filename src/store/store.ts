import { configureStore } from "@reduxjs/toolkit";
import reducers from ".";


export const store = configureStore({
    reducer: reducers
})