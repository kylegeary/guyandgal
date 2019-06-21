import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Truncate from "react-truncate"

const PostsPage = ({ data }) => (
  <Layout>
    <section className="section posts">
      <h2 className="posts__header">All Posts</h2>
      <ul className="cards">
        {data.allStrapiPost.edges.map(document => (
          <li className="card" key={document.node.id}>
            <Img
              className="card__image"
              fluid={document.node.image.childImageSharp.fixed}
            />
            <div className="card__text">
              <span className="card__category">{document.node.category}</span>
              <h3 className="card__title">
                <Link
                  className="post-preview__link"
                  to={`/${document.node.id}`}
                >
                  {document.node.title}
                </Link>
              </h3>
              <p className="card__content">
                <Truncate
                  lines={3}
                  ellipsis={
                    <>
                      <span>...</span>
                    </>
                  }
                >
                  {document.node.postpreview}
                </Truncate>
              </p>
              <Link className="card__cta" to={`/${document.node.id}`}>
                Read More
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </section>
  </Layout>
)

export default PostsPage

export const pageQuery = graphql`
  query PostsQuery {
    allStrapiPost {
      edges {
        node {
          id
          image {
            childImageSharp {
              fixed(width: 200, height: 200) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          title
          content
          category
          postpreview
        }
      }
    }
  }
`
