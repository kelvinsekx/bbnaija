import React, { useState } from "react"
// import { Link } from "gatsby"

import "./layout.css"

import { ThemeProvider } from "styled-components";
import {useDarkMode} from './useDarkMode'
import { lightTheme, darkTheme } from "./theme"
import { GlobalStyles } from "./global"

// imported component
import Footer from "./footer"
import NavHeader from "./header"

import { rhythm, scale } from "../utils/typography"

const Layout = ({ location, title, children }) => {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const  themeMode = theme === 'light' ? lightTheme : darkTheme;

  if(!componentMounted){
    return <div />
  }
  
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          width: '50vw'
        }}
      >
        <NavHeader 
        theme={theme} 
        toggleTheme={toggleTheme} />
        <main>{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default Layout
