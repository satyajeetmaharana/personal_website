import "./layout.css"
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { useMediaQuery } from 'react-responsive'


import { CSSTransition } from "react-transition-group";

import Navbar from "../components/navbar"

import Image from "../components/image"
import { FiArrowDownCircle } from 'react-icons/fi';
import { FaExternalLinkAlt, FaReact, FaLinkedin,FaGithubSquare,FaEnvelope } from 'react-icons/fa';
import { IconContext } from "react-icons";
import { Link } from "gatsby"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
  }

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
    <>
      
      <div style={{position:'sticky',zIndex:'-999',top:'0'}}>
          <Image/>
      </div>
      <div style={{position:'fixed',width:'100%',height:'100%',top:'0',bottom:'0',left:'0',right:'0',backgroundColor:'rgba(0,0,0,0.5)'}}>
      </div>
      
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={0}
        classNames="NavAnimation"
        unmountOnExit
      >
        <div>
          <div style={{position: 'absolute',top:'50%',left:'50%',transform: 'translate(-50%, -50%)',textAlign: 'center'}}>
              <div style={{fontSize:'4em',color:'white',fontWeight:'500',textShadow: '2px 2px 4px #000000'}}>Hi, I'm Satyajeet.</div>
              <div style={{fontSize:'1em',color:'white',fontWeight:'500',textShadow: '2px 2px 4px #000000'}}>Software Engineer | New York City</div>
              <div>
                <IconContext.Provider value={{size:'2em',className:'contact-icons-top'}}>
                  <div>
                      <a href="https://www.linkedin.com/in/satyajeetmaharana/" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>&nbsp;&nbsp;
                      <a href="https://github.com/satyajeetmaharana" target="_blank" rel="noopener noreferrer"><FaGithubSquare/></a>&nbsp;&nbsp;
                      <a href="mailto:satyajeet@nyu.edu" target="_blank" rel="noopener noreferrer"><FaEnvelope/></a>
                    </div>
                  </IconContext.Provider>
                </div>
            </div>
          <div className="bounce" style={{position:'absolute',top:'90%',left:'50%',transform:'translate(-50%,-50%)', textAlign:'center'}}>
              <IconContext.Provider value={{ size: "3rem", color: "white"}}>
                <div>
                  <Link to="/#head-links"><FiArrowDownCircle /></Link>
                </div>
              </IconContext.Provider>
          </div>
        </div>
      </CSSTransition>

      <CSSTransition
        in={isSmallScreen || isNavVisible}
        timeout={0}
        classNames="NavAnimation"
        unmountOnExit
      >
        <div>
          <Navbar/>
          <div style={{position:'absolute',paddingBottom:'50%',left:'50%',transform:'translate(-50%,-50%)', textAlign:'center'}}>
              <div  style={{fontSize:'1.5em',color:'white',fontWeight:'500',textShadow: '2px 2px 4px #000000'}}>Hi, I'm Satyajeet.</div>
              <div style={{fontSize:'1em',color:'white',fontWeight:'500',textShadow: '2px 2px 4px #000000'}}>Software Engineer | New York City</div>
              {/*<IconContext.Provider value={{size:'2em',className:'contact-icons-top'}}>
                  <div>
                    <a href="https://www.linkedin.com/in/satyajeetmaharana/" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>&nbsp;&nbsp;
                    <a href="https://github.com/satyajeetmaharana" target="_blank" rel="noopener noreferrer"><FaGithubSquare/></a>&nbsp;&nbsp;
                    <a href="mailto:satyajeet@nyu.edu" target="_blank" rel="noopener noreferrer"><FaEnvelope/></a>
                  </div>
                </IconContext.Provider>*/}
          </div>
        </div>
      </CSSTransition>
      {/*
      <Tablet>
        <div>
          <Navbar/>
        </div>
        <div style={{position:'absolute',top:'20%',left:'50%',transform:'translate(-50%,-50%)', textAlign:'center'}}>
            <div  style={{fontSize:'3em',color:'white',fontWeight:'500',textShadow: '2px 2px 4px #000000'}}>Hi, I'm Satyajeet.</div>
            <div style={{fontSize:'1em',color:'white',fontWeight:'500',textShadow: '2px 2px 4px #000000'}}>Software Engineer | New York City</div>
          <IconContext.Provider value={{size:'2em',className:'contact-icons-top'}}>
            <div>
              <a href="https://www.linkedin.com/in/satyajeetmaharana/" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>&nbsp;&nbsp;
              <a href="https://github.com/satyajeetmaharana" target="_blank" rel="noopener noreferrer"><FaGithubSquare/></a>&nbsp;&nbsp;
              <a href="mailto:satyajeet@nyu.edu" target="_blank" rel="noopener noreferrer"><FaEnvelope/></a>
            </div>
          </IconContext.Provider>
        </div>
      </Tablet>*/}
      
      <div
        style={{
          margin: `0 auto`,
          position:'relative',
          //maxWidth: 1100,
          //padding: `5rem`,
          width:'100%',
          //border:'1px solid gray',
          //boxShadow: '1px 1px 8px gray',
          backgroundColor:'white'
        }}
      >
        <main>{children}</main>
        <footer style={{color:'white',backgroundColor:'black',padding:'1rem',textAlign:'center'}}>
          © Satyajeet Maharana | New York City, {new Date().getFullYear()} <br/> Built with
          {` `}
          <a href="https://reactjs.org/" style={{textDecoration:'underline',color:'white'}} target="_blank" rel="noopener noreferrer">React <FaReact size='15'/></a>
          &nbsp;&&nbsp;
          <a href="https://www.gatsbyjs.org/" style={{textDecoration:'underline',color:'white'}} target="_blank" rel="noopener noreferrer">Gatsby <FaExternalLinkAlt size='15'/></a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
