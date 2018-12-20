import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import root from 'window-or-global';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../pages/footer/index';
import Header from '../components/header/header';
import favicon from '../images/logo.png';
import './index.css'

const Layout = ({ children, data }) => (
  
    <div>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
          {name: "viewport", content:'width=device-width, initial-scale=1'},
        ]}
        link={[{rel: 'shortcut icon', type: 'image/png', href: `${favicon}`}]}
      > <html lang="en" />
      </Helmet>
        <div className="site">
          <Header siteTitle={data.site.siteMetadata.title} />
            <div className="site-content">
              {children()}
            </div>
        </div>
      <Footer />
    </div>   
  )
  
  Layout.propTypes = {
    children: PropTypes.func,
  }
  
  export default Layout
  
  export const query = graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `