import React from 'react';
import {useAppDispatch, useAppSelector} from "../../Hooks";
import {postFetchAdmin, setFileREC, setValueREC} from "../../Redux/ActionCreatorrs/Child";

const Admin = () => {
    const {value,file} = useAppSelector(s => s.ChildS)
    const dispatch = useAppDispatch()

    const handleChange = (e: React.ChangeEvent<any>) => {
        dispatch(setValueREC({...value, [e.target.name]: e.target.value}))
    }
    const fileReader = new FileReader()
    fileReader.onloadend = () => dispatch(setFileREC(fileReader.result))
    const handleFiles = (e: React.ChangeEvent<any>) => dispatch(setFileREC(fileReader.readAsDataURL(e.target.files[0])))

    const newPr = {
        title: value.title,
        image: file,
        description: value.description
    }
    const formChange = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement | HTMLFieldSetElement | HTMLFormElement | HTMLButtonElement>) => {
        e.preventDefault()
        dispatch(postFetchAdmin(newPr))
        dispatch(setValueREC({title: "", description: ""}))
        dispatch(setFileREC(""))
    }


    return (
        <div className="flex items-center justify-between my-24">
            <form action="" onSubmit={formChange}>
                <div className="">
                    <input onChange={handleFiles} type="file"/>
                    <input name={"title"} onChange={handleChange} value={value.title} type="search" className="block w-[400px] p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required/>
                    <textarea name={"description"} onChange={handleChange} value={value.description} placeholder="description" className="block w-[400px] p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    <button onClick={formChange} className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">Default</button>
                </div>
            </form>

            <div className="border-2 border-blue-600 w-[450px] h-[500px] flex items-center flex-col justify-evenly">
                <img width={200} src={file} alt=""/>
                <h1>{value.title}</h1>
                <h2>{value.description}</h2>
            </div>
        </div>
    );
};

export default Admin;