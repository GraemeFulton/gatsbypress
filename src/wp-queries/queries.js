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
              resolutions(width:370, height:229){
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
  }
}
`