import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

const IndexPage = ({ data }) => (
  <Layout>
    <ul className="posts">
      <h2 className="posts__header">Latest Posts</h2>
      {data.allStrapiPost.edges.map(document => (
        <li className="post-preview" key={document.node.id}>
          <div className="post-preview__image">
            <Img fixed={document.node.image.childImageSharp.fixed}/>
          </div>
            <div className="post-preview__text">
              <h3 className="post-preview__title">
                <Link className="post-preview__link" to={`/${document.node.id}`}>
                  {document.node.title}
                </Link>
              </h3>
              <p className="post__preview-content">{document.node.postpreview}</p>
            </div>
        </li>
      ))}
    </ul>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
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
          postpreview
        }
      }
    }
  }
`