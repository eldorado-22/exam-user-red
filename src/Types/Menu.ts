import {TValue} from "./Child";


export interface IMenuState {
    menu: TValue[]
    modal: boolean,
    newValue: Partial<TValue>
    newFile: any
    upDateMenu: []
}