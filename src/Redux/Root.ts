import {combineReducers} from "@reduxjs/toolkit";
import AdminReducer from "./Reducer/MenuSlice";
import ChildS from "./Reducer/ChildSlice"


export const rootState = combineReducers({
    AdminReducer,
    ChildS,
})
