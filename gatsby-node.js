const path = require("path")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allContentfulBlogSite {
        nodes {
          title
          slug
          publishedDate
          featuredImage {
            file {
              url
            }
          }
          body {
            raw
          }
          excerpt {
            excerpt
          }
        }
      }
    }
  `)

  const blogs = result.data.allContentfulBlogSite.nodes

  blogs.forEach((obj) => {
    createPage({
      path: `/blogs/${obj.slug}`,
      component: path.resolve(`src/template/blog.js`),
      context: {
        title: obj.title,
        image: obj.featuredImage.file.url,
        date: obj.publishedDate,
        body: obj.body.raw

      },
    })
  })


}