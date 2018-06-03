import React, { Component } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

class PostTemplate extends Component {
  render() {
    const post = this.props.data.wordpressPost
    let imageResolutions=null
    
    if(post.featured_media){
       imageResolutions = post.featured_media.localFile.childImageSharp.resolutions
    }
    return (
      <div>
        <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
        {imageResolutions && 
          <div>
            <Img resolutions={imageResolutions}/>
          </div>
        }
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
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
      content
      featured_media{
        localFile{
          childImageSharp{
            resolutions(width:500, height:300){
              src
              width
              height
            }
          }
        }
      }
    }
  }
`