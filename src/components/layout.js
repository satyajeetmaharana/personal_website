import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"

import Image from "../components/image"
import { FiArrowDownCircle } from 'react-icons/fi';
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
  return (
    <>
      <div style={{position:'sticky',zIndex:'-999',top:'0'}}>
          <Image/>
      </div>

      <div style={{position:'fixed',width:'100%',height:'100%',top:'0',bottom:'0',left:'0',right:'0',backgroundColor:'rgba(0,0,0,0.5)'}}>
      </div>
      <div style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)', textAlign:'center'}}>
        <div style={{fontSize:'4rem',color:'white',fontWeight:'500',textShadow: '2px 2px 4px #000000'}}>Satyajeet Maharana</div>
        <div style={{fontSize:'1rem',color:'white',fontWeight:'500',textShadow: '2px 2px 4px #000000'}}>Software Engineer | New York City</div>
        
      </div>
      <div className="bounce" style={{position:'absolute',top:'90%',left:'50%',transform:'translate(-50%,-50%)', textAlign:'center'}}>
          <IconContext.Provider value={{ size: "3rem", color: "white"}}>
            <div>
              <Link to="/#head-links"><FiArrowDownCircle /></Link>
            </div>
          </IconContext.Provider>
        </div>
      
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
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://reactjs.org/" style={{textDecoration:'none',color:'white'}}>React</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
