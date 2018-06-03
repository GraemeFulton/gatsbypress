import React, {Component} from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import theme from '../styles/theme'

const Header = styled.header`
  background: ${theme.colors.base};
  width: 100%;
  padding: 1.5em 0;
`
const Nav = styled.nav`
  width: 100%;
  max-width: ${theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 1.5em;

  ul {
    display: flex;
    justify-content: space-between;
  }

  li {
    display: inline-block;
    margin-left: 1em;
    &:first-child {
      position: relative;
      margin: 0;
      flex-basis: 100%;
    }
  }

  a {
    text-decoration: none;
    color: DarkGray;
    font-weight: 600;
    transition: all 0.2s;
    border-bottom: 2px solid ${theme.colors.base};
    &:hover {
      color: white;
    }
  }
`

const activeLinkStyle = {
  color: 'white',
}


class Menu extends Component{

  render(){
    return (
      <Header>
        <Nav>
          <ul>
            <li>
              <Link to="/" exact activeStyle={activeLinkStyle}>
                {this.props.siteTitle}
              </Link>
            </li>
            {this.props.menuData.map((item) => 
              <li key={item.object_slug}>
                  <Link to={'/post/'+item.object_slug}>
                      {item.title}
                  </Link>
              </li>
            )}
          </ul>
        </Nav>
      </Header>
    )
  }
  

}

export default Menu
