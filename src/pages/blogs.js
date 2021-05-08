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
      <div className='container'>
        <h1 className='heading1'>ALL BLOGS</h1>


        <div className='wrapper'>
          {blog.map((el) => {
            return (

              <div className="card">
                <Link to={el.node.slug} style={{ textDecoration: 'none', color: '#555' }}>

                  <img src={el.node.featuredImage.file.url} alt="Avatar" style={{ width: "100%" }} />
                  <div className="container">
                    <h4><b>{el.node.title}</b></h4>
                    <br />
                    <p>{el.node.excerpt.excerpt}</p>
                  </div>
                </Link>
              </div>

            )
          })}
        </div>
      </div>

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