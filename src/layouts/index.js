import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import MainMenu from '../components/menu'
import './index.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
    <MainMenu menuData ={data.allWordpressWpApiMenusMenusItems.edges[0].node.items}/>
      {children()}
    </div>
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
