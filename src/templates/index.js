import React from 'react'
import Link from 'gatsby-link'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'

import CardList from '../components/CardList'
import Card from '../components/Card'
import PostLinks from '../components/PostLinks'

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
    <PageTitle small>Welcome!</PageTitle>

      <h4 style={{paddingBottom:'2em'}}>{pageCount} Posts</h4>
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

        {/* {tags && <TagList tags={tags} />} */}
        <PostLinks first={first} last={last} previous={0} next={'/posts/'+nextUrl} />
  </Container>
)}

export default IndexPage
