import React, { Component } from "react";
import Link from "gatsby-link";
import Img from 'gatsby-image';
import Container from '../components/Container'

import CardList from '../components/CardList'
import Card from '../components/Card'

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
      <h4>Page {index} of {pageCount}</h4>

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
               <h4>Page {index} of {pageCount}</h4>

      <br/>
      <div className="previousLink">
        <NavLink test={first} url={previousUrl} text="Go to Previous Page" />
      </div>
      <div className="nextLink">
        <NavLink test={last} url={nextUrl} text="Go to Next Page" />
      </div>
    </Container>
  );
};
export default PostsPage;