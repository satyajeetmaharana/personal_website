
/* eslint-disable jsx-a11y/accessible-emoji */
import "./navbar.css";
import React, { useState, useEffect } from "react";

import { CSSTransition } from "react-transition-group";

import { FaHamburger} from 'react-icons/fa';
import { IconContext } from "react-icons";

export default function Header() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <header className="Header">
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="Nav">
            <a href="#AboutSec" onClick={toggleNav}>About<br/></a>
            <a href="#Skills" onClick={toggleNav}>Skills<br/></a>
            <a href="#Education" onClick={toggleNav}>Education<br/></a>
            <a href="#Experience" onClick={toggleNav}>Experience<br/></a>
            <a href="#Projects" onClick={toggleNav}>Projects<br/></a>
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="Burger" style={{color:'black'}}>
        <IconContext.Provider value={{size:'1em',className:'burger-icon'}}>
            <FaHamburger/>
        </IconContext.Provider>
      </button>
    </header>
  );
}