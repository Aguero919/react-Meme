import React from "react";

import "./style.css";

import Memes from "./Memes";
import Navbar from "./Navbar"

const App = () => {
    return(
        <div>
            <Navbar />
            <Memes />
        </div>
    )
}

export default App;