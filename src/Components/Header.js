import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = (props) => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate("/");
    }


    if (localStorage.getItem("newtoken") == null) {
        var menu = (
            <></>
        )
    } else {
        var menu = (
            <>
                <nav class="navbar header">
                    <div class="container">
                        <form class="d-flex" role="search">
                            <input class="search_box" type="text" onChange={props.onChangeHandler} placeholder="Search Movies" aria-label="Search" />
                            <button class="search_button" onClick={props.searchMovie} type="submit"><img src={require('../Assets/search.png')} alt="" /></button>
                            <p class="log_out"><Link to="/"><span onClick={logout}>Log Out</span></Link></p>
                        </form>

                    </div>
                </nav>
            </>
        )
    }
    return (
        <div className="header">
            <img className="logo" src={require('../Assets/logo.png')} alt="Logo" />
            {menu}
        </div>
    )
};

export default Header;