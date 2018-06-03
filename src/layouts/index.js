import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
// import './index.css'

/** Theme: https://github.com/ryanwiemer/gatsby-starter-gcn **/
import { ThemeProvider } from 'styled-components'

import '../styles/global'
import theme from '../styles/theme'
import Menu from '../components/Menu'
import Footer from '../components/Footer'

const Layout = ({ children, data }) => (
  <div className="siteRoot">
  <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
  <ThemeProvider theme={theme}>
    <div className="siteContent">
      <Menu 
      siteTitle={data.site.siteMetadata.title}
      menuData ={data.allWordpressWpApiMenusMenusItems.edges[0].node.items}  
      />  
      {children()}
    </div>
  </ThemeProvider>
    
    {/* Footer placed in seperate ThemeProvider to avoid Rendering an extra DIV in HTML output  */}
    <ThemeProvider theme={theme}>
      <Footer />
    </ThemeProvider>
  </div>
  
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
query MainQuery{
  site{
      siteMetadata{
        title
      }
    }
  allWordpressWpApiMenusMenusItems{
    edges{
      node {
        items{
          title,
          url,
          object_slug
        }
        
      }
    }
  }
}

`
