import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCoffee,faEnvelope,faFileDownload, faFilePdf} from "@fortawesome/free-solid-svg-icons"
import { fab,faFacebook } from "@fortawesome/free-brands-svg-icons"

library.add(fab, faCoffee,faEnvelope,faFileDownload,faFacebook,faFilePdf)

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `black`,
      marginBottom: `0  rem`,
      position:'sticky',
      top:0,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <div style={{padding:'0.3rem',display:'flex'}}>
        <div style={{padding:'0.3rem'}}><FontAwesomeIcon icon={['fab', 'github']} size="lg" color="#333"/></div>
        <div style={{padding:'0.3rem'}}><FontAwesomeIcon icon={['fab', 'linkedin']} size="lg" color="#0976b4"/></div>
        <div style={{padding:'0.3rem'}}><FontAwesomeIcon icon='envelope' size="lg" color="white"/></div>
        <div style={{padding:'0.3rem'}}><FontAwesomeIcon icon='file-pdf' size="lg" color="white"/></div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
