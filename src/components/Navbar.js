import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";


const elmIcon = faGlobe;
function Navbar() {
    return (
        <nav className="navbar">
            <FontAwesomeIcon className="navbar--icon" icon = {faGlobe}/>
            <h2>My Travel Tour</h2>
        </nav>
    )
}

export default Navbar;