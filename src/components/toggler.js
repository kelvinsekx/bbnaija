import React from "react"
import { func, string } from "prop-types"

import { ToggleContainer } from "./toggle.styled.js"
//import a couple of svg files we'be using down here
import Moon from "../icons/moon.svg"
import Sun from "../icons/sun.svg"

function Toggler({ theme, toggleTheme }) {
  const isLight = theme === "light"
  if (theme !== null) {
    return (
      <ToggleContainer role="switch" onClick={toggleTheme} 
      lightTheme={isLight}>
        <title>toggle dark mode</title>
        {/*<!-- include two different icon paths, then display the one matching the current state in CSS */}
        <Moon />
        <Sun />
      </ToggleContainer>
    )
  } else {
    return <span />
  }
}

Toggler.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default Toggler
