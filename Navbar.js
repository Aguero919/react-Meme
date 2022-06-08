import React from "react";

import "./style.css";
import trollface from "./img/Troll Face.png";

const Navbar = () => {
    return(
        <nav className="navbar">
            <div className="navlogo">
                <img src={trollface}  alt="trollface" className="trollface"/>
                <h2 className="logo-name">Meme Generator</h2>
            </div>

            <div className="nav-subject">
                <h3>React course - project 3</h3>
            </div>
        </nav>
    )
}

export default Navbar;