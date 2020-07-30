import React from "react";
import { Link } from "gatsby"

import { StyledNav, StyledFlexRow} from "./index.styled"

// imported component;
import Logo from "./logo"
import Toggler from "./toggler"

function Header({theme, toggleTheme}){
    return (
        <StyledNav>
            <div><Link to="/" className="to"><Logo /></Link></div>
            <StyledFlexRow>
                <Toggler 
                theme={theme} 
                toggleTheme= {toggleTheme} />
                <div>Octopus</div>
            </StyledFlexRow>
        </StyledNav>
    )
}

export default Header