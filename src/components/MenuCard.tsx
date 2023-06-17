import React, {useState} from 'react';
import {TValue} from "../Types/Child";
import {delMenuREC, upDateModalREC} from "../Redux/ActionCreatorrs/Menu";
import {useAppDispatch, useAppSelector} from "../Hooks";
import Modal from "./Modal";


interface IModalState  {
    el: TValue
}
const MenuCard = ({el}: IModalState) => {
    const dispatch = useAppDispatch()
    const deleteMenu = (id: any) => dispatch(delMenuREC(id))
    const [modal,setModal] = useState<boolean>(true)



    return (
        <div className="w-[330px] flex flex-col justify-between items-center h-[555px]">
            <img width={300} src={el.image} alt=""/>
            <div className="flex items-center py-3 justify-between w-[300px]">
                <h1 className="pt-2">{el.title}</h1>
                <h2 className="py-2">{el.description}</h2>
            </div>
            <div className="flex items-center justify-between w-[300px]">
                <button onClick={() => deleteMenu(el.id)} className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Delete</button>

            </div>
            <Modal el={el} key={el.id} setModal={setModal} modal={modal}/>
        </div>
    );
};

export default MenuCard;