import React from 'react'
import Link from 'gatsby-link'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'

import CardList from '../components/CardList'
import Card from '../components/Card'

const NavLink = props => {
  if (!props.test) {
    return <Link to={props.url}>{props.text}</Link>;
  } else {
    return <span>{props.text}</span>;
  }
};

const IndexPage = ({ data, pathContext }) => {
  const { group, index, first, last, pageCount } = pathContext;  
  const previousUrl = index - 1 == 1 ? "" : (index - 1).toString();
  const nextUrl = (index + 1).toString();
  
  return(
  <Container>
    <PageTitle small>Hi people</PageTitle>

      <h4>{pageCount} Posts</h4>
      <CardList>
      {group.map(({ node }) => (
          <Card
              key={node.slug}
              slug={node.slug}
              image={node}
              title={node.title}
              date={node.date}
              excerpt={node.excerpt}
            />
      ))}
      </CardList>

      <div className="previousLink">
        <NavLink test={first} url={'/posts/'+previousUrl} text="Go to Previous Page" />
      </div>
      <div className="nextLink">
        <NavLink test={last} url={'/posts/'+nextUrl} text="Go to Next Page" />
      </div>
  </Container>
)}

export default IndexPage
