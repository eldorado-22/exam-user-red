import React from 'react';
import {Link} from "react-router-dom";
// import logo from "./../../../public/logo32.png";

const Header = () => {
    return (
        <div id="header">
            <div className="container">
                <div className="header">
                    <h1>LOGO</h1>
                    <nav>
                       <Link to={"/admin"}>
                           <a href="#">Admin</a>
                       </Link>
                        <Link to={"/menu"}>
                            <a href="#">Menu</a>
                        </Link>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;