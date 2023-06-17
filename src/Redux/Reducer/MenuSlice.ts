import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IMenuState} from "../../Types/Menu";
import {TValue} from "../../Types/Child";

const initialState: IMenuState = {
    menu: [],
    modal: true,
    newValue: {
        title: "",
        image: "",
        description: ""
    },
    newFile: "",
    upDateMenu: []
}

export const MenuReducer = createSlice({
    name: "MENU",
    initialState,
    reducers: {
        getMenu(state, {payload}: PayloadAction<TValue[]>) {
            state.menu = payload
        },
        delMenu(state,{payload}: PayloadAction<any>) {
            state.menu = state.menu.filter(el => el.id !== payload.id)
        },
        upDate(state,{payload}: PayloadAction<boolean>) {
            state.modal = payload
        },
        getNewValue(state,{payload}: PayloadAction<Partial<TValue>>) {
            state.newValue = {title: payload.title, description: payload.description, image: "adil"}
        },
        getNewFile(state,{payload}: PayloadAction<any>) {
            state.newFile = payload
        },
        upDataMenu(state,{payload}: PayloadAction<any>) {
            state.upDateMenu = payload
        }
    }
})


export const {getMenu,delMenu,upDataMenu,upDate,getNewFile,getNewValue} = MenuReducer.actions
export default MenuReducer.reducer