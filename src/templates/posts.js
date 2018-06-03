import React, { Component } from "react";
import Link from "gatsby-link";
import Img from 'gatsby-image';
import Container from '../components/Container'

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


const PostsPage = ({ data, pathContext }) => {
  const { group, index, first, last, pageCount } = pathContext;
  const previousUrl = index - 1 == 1 ? "" : (index - 1).toString();
  const nextUrl = (index + 1).toString();

  return (
    <Container>
      <h4 style={{paddingBottom:'2em'}}>Page {index} of {pageCount}</h4>

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

      <br/>
      <PostLinks 
        first={first} 
        last={last} 
        previous={previousUrl} 
        next={'/posts/'+nextUrl}
        pagination={'Page '+index+' of '+pageCount} />
    </Container>
  );
};
export default PostsPage;