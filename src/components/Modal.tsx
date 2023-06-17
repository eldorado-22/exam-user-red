import React from 'react';
import {TValue} from "../Types/Child";
import {useAppDispatch, useAppSelector} from "../Hooks";
import {fetchPut, newFileREC, newValuesREC} from "../Redux/ActionCreatorrs/Menu";


interface IModal {
    el: TValue,
    modal: boolean,
    setModal: (b: boolean) => void
}

const Modal = ({el, modal, setModal}: IModal) => {
    const {newValue,newFile} = useAppSelector(s => s.AdminReducer)
    const dispatch = useAppDispatch()
    const newHandleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => dispatch(newValuesREC({...newValue, [e.target.name]: e.target.value}))
    const newFileReader = new FileReader()
    newFileReader.onloadend = () => dispatch(newFileREC(newFileReader.result))
    const newHandleFile = (e: any) => dispatch(newFileREC(newFileReader.readAsDataURL(e.target.files[0])))

    const newUpDate = {
        title: newValue.title || el.title,
        image: newFile || el.image,
        description: newValue.description || el.description
    }
    const handleClick = () => {
        dispatch(fetchPut(el.id, newUpDate))
        setModal(true)
    }


    return (
        <>
            <button onClick={() => setModal(!modal)} className="text-white w-full my-5 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">modal</button>

            <div hidden={modal} onClick={() => setModal(!modal)} className="w-full left-0 top-0 h-full bg-black/50 fixed z-10"></div>

            <div hidden={modal}>
                <div className="w-[440px] items-center flex flex-col justify-evenly h-[440px] left-[34%] top-[14%] bg-white/50 fixed z-20">
                    <input onChange={newHandleFile} type="file"/>
                    <input onChange={newHandleChange}  defaultValue={el.title} name={"title"} type="search" className="block w-[400px] p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required/>
                    <textarea onChange={newHandleChange}  defaultValue={el.description} name={"description"}  placeholder="description" className="block w-[400px] p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    <button onClick={handleClick} className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">Default</button>
                </div>
            </div>
        </>
    );
};

export default Modal;