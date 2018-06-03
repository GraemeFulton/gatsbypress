import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  a {
    background: ${props => props.theme.colors.base};
    color: white;
    padding: 1em;
    border-radius: 2px;
    text-decoration: none;
    transition: 0.2s;
    &:hover {
      background: ${props => props.theme.colors.highlight};
    }
  }
`

const PreviousLink = styled(Link)`
  margin-right: auto;
  order: 1;
`

const NextLink = styled(Link)`
  margin-left: auto;
  order: 2;
`

const PrevNavLink = props => {
  if (!props.test) {
    return <Link to={props.url}>{props.text}</Link>;
  } 
  else {
    if(props.url!=0){
    return <span>{props.text}</span>;
    }
    else{
      return <span></span>;
    }
  }

};

const NextNavLink = props =>{
  if (!props.test) {
    return <Link to={props.url}>{props.text}</Link>;
  }
  else {
    return <span>{props.text}</span>;
  }
}

const PostLinks = props => {
  return (
    <Wrapper>
        <PrevNavLink test={props.first} url={props.previous} text="Previous Page" />
        <div style={{padding:'1em'}}>{props.pagination}</div>
        <NextNavLink test={props.last} url={props.next} text="Next Page" />
    </Wrapper>
  )
}

export default PostLinks
