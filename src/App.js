import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./globalStyles.js";
import { darkTheme, lightTheme } from './utils/Theme.js'
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from 'react-router-dom';
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import ProjectModal from "./components/Modals/ProjectModal.js";

function App() {
  const [theme, setTheme] = useState('dark');
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}> 
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar themeToggler={themeToggler} theme={theme}/>
        <GlobalStyles/>
          <Intro/>
          <Skills />
          <Experience themee={theme}/> 
          <Projects openModal={openModal} setOpenModal={setOpenModal} />
          {openModal.state &&
            <ProjectModal openModal={openModal} setOpenModal={setOpenModal} />
          } 
      </Router>
     
    </ThemeProvider>
  );
}

export default App;