import {configureStore} from "@reduxjs/toolkit";
import {rootState} from "./Root";



export const setUpStore = () => {
    return configureStore({
        reducer: rootState
    })
}

export type rootReducer = ReturnType<typeof rootState>
type appState = ReturnType<typeof setUpStore>
export type appDispatch = appState["dispatch"]