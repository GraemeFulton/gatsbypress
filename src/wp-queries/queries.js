exports.pageQuery = `
{
  allWordpressPage {
    edges {
      node {
        id
        slug
        status
        template
      }
    }
  }
}
`

exports.postsQuery = `
{
  allWordpressPost {
    edges {
      node {
        id
        slug
        status
        template
        format
        title
        date
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
  }
}
`