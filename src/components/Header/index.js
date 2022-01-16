import React from "react";
import Nav from "../Navigation"

function Header(props){

const {currentSection, handleSectionChange, } = props
    return (
<header className="top">
    <h1>
    Andrew Lefebvre
    </h1>
    <Nav
    currentSection={currentSection}
    handleSectionChange={handleSectionChange}>
    </Nav>
</header>
    )
}
export default Header;