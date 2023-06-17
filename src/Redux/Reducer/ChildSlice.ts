import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IChildState} from "../../Types/Child";

export const initialState: IChildState = {
    value: {
        title: "",
        image: "",
        description: "",
    },
    file: "",
    admin: []
}

export const ChildReducer = createSlice({
    name: "CHILD",
    initialState,
    reducers: {
        getValue(state, {payload}: PayloadAction<any>) {
            state.value = payload
        },
        getFile(state,{payload}: PayloadAction<any>) {
            state.file = payload
        },
        postAdmin(state, action: PayloadAction<any>) {
            state.admin = action.payload
        }
    }
})


export const {getValue,getFile,postAdmin} = ChildReducer.actions
export default ChildReducer.reducer