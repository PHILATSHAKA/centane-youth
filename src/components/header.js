import React from 'react'
import Link from 'gatsby-link'
// import logo from '../images/one.jpg'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: '#3CB371',
      marginBottom: '0',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >

      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'black',
              fontFamily: 'Times New Roman',
            textDecoration: 'none',

          }}
        >
          {siteTitle}
          {/*<img src={logo} alt="logo" style={{height: '80px', width: '960px'}}/>*/}
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
