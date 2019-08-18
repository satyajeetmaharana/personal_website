/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"

import Image from "../components/image"

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

  return (
    <>
      <div style={{position:'sticky',zIndex:'-999',top:'0'}}>
          <Image/>
      </div>

      <div style={{position:'fixed',width:'100%',height:'100%',top:'0',bottom:'0',left:'0',right:'0',backgroundColor:'rgba(0,0,0,0.5)'}}>
      </div>
      <div style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)'}}>
        <div style={{fontSize:'5rem',color:'white',fontWeight:'500',textShadow: '2px 2px 4px #000000'}}>Satyajeet Maharana</div>
      </div>
      
      <div
        style={{
          margin: `0 auto`,
          position:'relative',
          //maxWidth: 1100,
          padding: `5rem`,
          border:'1px solid gray',
          boxShadow: '1px 1px 8px gray',
          backgroundColor:'white'
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
