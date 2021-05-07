import { graphql, Link } from "gatsby"
import React from "react"
import "./blogs.css"
import Header from '../components/Header'

const blogs = ({ data }) => {
  console.log(data)
  const blog = data.allContentfulBlogSite.edges
  return (
    <div>
      <Header />
      {/* <Link id='lg' to="/"><button>Go To Home</button></Link>
      <h1>Blogs</h1>
      <div>
        {blog.map((el) => {
          return (
            <div>
              <Link id='lg' to={el.node.slug}>
                <p>
                  <h2>{el.node.title}</h2>
                  {el.node.excerpt.excerpt}
                </p>
                <img src={el.node.featuredImage.file.url} alt='cover' width="700px" />
              </Link>
            </div>
          )
        })}
      </div> */}
    </div>
  )
}

export const query = graphql`
  query {
    allContentfulBlogSite {
      edges {
        node {
          slug
          title
          publishedDate
          featuredImage {
            file {
              url
            }
          }
          excerpt {
            excerpt
          }
        }
      }
    }
  }
`
export default blogs