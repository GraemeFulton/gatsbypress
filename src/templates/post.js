import React, { Component } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

import Hero from '../components/Hero'
import Container from '../components/Container'
import PageBody from '../components/PageBody'
import TagList from '../components/TagList'
import PostLinks from '../components/PostLinks'
import PostDate from '../components/PostDate'
import PageTitle from '../components/PageTitle'


class PostTemplate extends Component {

  render() {
    const post = this.props.data.wordpressPost    
    
    //set header depending on featured image
    let header=(
      <div style={{margin:'5em auto', maxWidth:'650px', textAlign:'center'}}>
            <PageTitle small>
            <h1 dangerouslySetInnerHTML={{ __html: post.title.replace(/[^a-zA-Z ]/g, " ") }} />
            </PageTitle>
      </div>
    )
    if(post.featured_media){
      header= (<div>
        <Hero title={post.title.replace(/[^a-zA-Z ]/g, " ")} image={post.featured_media.localFile.childImageSharp.original} />
      </div>)
    }


    return (
      <div>
        {header}

        <Container>
        {/* {tags && <TagList tags={tags} />} */}
        <PostDate date={post.date.substr(0, post.date.indexOf('T'))} />
        <PageBody body={post.content} />
        {/* <PostLinks previous={postIndex.previous} next={postIndex.next} /> */}
      </Container>
        {/* <h1 dangerouslySetInnerHTML={{ __html: post.title }} /> */}
        {/* <div dangerouslySetInnerHTML={{ __html: post.content }} /> */}
      </div>
    )
  }
}

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default PostTemplate

export const pageQuery = graphql`
  query currentPostQuery($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      date
      content
      featured_media{
        localFile{
          childImageSharp{
            resolutions(width:500, height:300){
              src
              width
              height
            }
            original{
              width
              height
              src
            }
          }
        }
      }
    }
  }
`