import {appDispatch} from "../store";
import {delMenu, getMenu, getNewFile, getNewValue, upDataMenu, upDate} from "../Reducer/MenuSlice";
import axios from "axios";


export const fetchMenu = () => async (dispatch: appDispatch) => {
    const url = await axios.get(`https://63f7d56473bce6c44976af55.mockapi.io/tasks`)
    const {data} = await url
    dispatch(getMenu(data))
}

export const delMenuREC = (id: any) => async (dispatch: appDispatch) => {
    dispatch(delMenu(await axios.delete(`https://63f7d56473bce6c44976af55.mockapi.io/tasks/` + id)))
    dispatch(fetchMenu())
}

export const upDateModalREC = (modal: any) => (dispatch: appDispatch) => {
    dispatch(upDate(modal))
}

export const newValuesREC = (el: any) => (dispatch: appDispatch) => {
    dispatch(getNewValue(el))
}

export const newFileREC = (el: any) => (dispatch: appDispatch) => {
    dispatch(getNewFile(el))
}

export const fetchPut =  (id: any, newUpDate: any) => async (dispatch: appDispatch) => {
    dispatch(upDataMenu(
        await axios.put(`https://63f7d56473bce6c44976af55.mockapi.io/tasks/` + id, newUpDate)
    ))
    dispatch(fetchMenu())
}









