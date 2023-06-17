import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../Hooks";
import {fetchMenu} from "../Redux/ActionCreatorrs/Menu";
import MenuCard from "./MenuCard";
// import MenuCard from "./MenuCard";

const Manu = () => {
    const {menu,modal} = useAppSelector(s => s.AdminReducer)
    const dispatch = useAppDispatch()


    useEffect(() => {
        dispatch(fetchMenu())
    }, [])


    return (
        <div className="flex items-center justify-evenly flex-wrap">
            {
                menu.map(el => <MenuCard el={el}/>)
            }
        </div>
    );
};

export default Manu;