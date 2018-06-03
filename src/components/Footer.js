import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.footer`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 auto;
`

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  border-top: 1px solid ${props => props.theme.colors.secondary};
  padding: 2em;
`

const Item = styled.li`
  display: inline-block;
  padding: 0.25em 0;
  width: 100%;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    width: auto;
  }
  a {
    font-weight: 600;
    transition: all 0.2s;
    color: ${props => props.theme.colors.base};
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
    &:visited {
      color: ${props => props.theme.colors.base};
    }
  }
`

const Footer = () => (
  <Wrapper>
    <List>
      <Item>
        <a
          href="https://www.wordpress.com/"
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          <img
            src="https://s.w.org/style/images/about/WordPress-logotype-alternative.png"
            style={{ width: '100px' }}
            alt="Powered by WordPress"
          />
        </a>
      </Item>
      <Item>
        <a
          href="https://github.com/ryanwiemer/gatsby-starter-gcn"
          target="_blank"
          rel="noopener noreferrer"
        >
          gatsby-wordpress-gcn
        </a>{' '}
        by{' '}
        <a
          href="https://github.com/graemefulton"
          target="_blank"
          rel="noopener noreferrer"
        >
          @graeme_fulton
        </a>
      </Item>
    </List>
  </Wrapper>
)

export default Footer
