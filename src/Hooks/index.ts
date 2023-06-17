import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {appDispatch, rootReducer} from "../Redux/store";


export const useAppSelector: TypedUseSelectorHook<rootReducer> = useSelector


export const useAppDispatch = () => useDispatch<appDispatch>()