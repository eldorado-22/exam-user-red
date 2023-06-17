import {TValue} from "../../Types/Child";
import {appDispatch} from "../store";
import {getFile, getValue, postAdmin} from "../Reducer/ChildSlice";
import axios from "axios";


export const setValueREC = (value: TValue) => (dispatch: appDispatch) => {
    dispatch(getValue(value))
}

export const postFetchAdmin = (newProduct: any) => async (dispatch: appDispatch) => {
    dispatch(postAdmin(await axios.post(`https://63f7d56473bce6c44976af55.mockapi.io/tasks/`,newProduct)))
}

export const setFileREC = (value: any) => (dispatch: appDispatch) => {
    dispatch(getFile(value))
}