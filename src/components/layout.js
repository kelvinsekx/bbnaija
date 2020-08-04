import React from "react"
// import { Link } from "gatsby"

import "./layout.css"

import { ThemeProvider } from "styled-components";

import {useDarkMode} from './useDarkMode'
import { lightTheme, darkTheme } from "./theme"
import { GlobalStyles } from "./global"

// imported component
import Footer from "./footer"
import NavHeader from "./header"

const Layout = ({ location, title, children }) => {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const  themeMode = theme === 'light' ? lightTheme : darkTheme;

  if(!componentMounted){
    return <div />
  }
  
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <div className="container">

        <NavHeader 
        theme={theme} 
        toggleTheme={toggleTheme} />

        <main theme={theme}>{children}</main>
        <Footer />

      </div>
    </ThemeProvider>
  )
}

export default Layout
