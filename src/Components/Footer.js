import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (<>
        <nav class="navbar header">
            <div class="container">
                <Link to="/Home">
                    <img className="logo" src={require('../Assets/logo.png')} alt="Bootstrap" />
                </Link>
                    <p class="list_ft"><Link to="/">To Watch</Link></p>
            </div>
        </nav>
    </>
    )
};

export default Footer;