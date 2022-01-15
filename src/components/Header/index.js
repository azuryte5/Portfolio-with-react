import React, {useState} from "react";
import Nav from "../Navigation"

function Header(props){

const {currentSection, handleSectionChange, sections} = props
    return (
<header>
    <h1>
    Andrew Lefebvre
    </h1>
    <Nav
    section={sections}
    currentSection={currentSection}
    handleSectionChange={handleSectionChange}>
    </Nav>
</header>
    )
}
export default Header;