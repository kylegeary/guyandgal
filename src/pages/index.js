import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"

const IndexPage = ({ data }) => (
  <Layout>
    <ul class="posts">
      {data.allStrapiPost.edges.map(document => (
        <li class="post" key={document.node.id}>
          <h2 class="post__title">
            <Link to={`/${document.node.id}`}>
              {document.node.title}
            </Link>
          </h2>
          <div class="post__preview">
            <Img class="post__preview-image" fixed={document.node.image.childImageSharp.fixed}/>
            <p class="post__preview-content">{document.node.content}</p>
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
              fixed(width: 200, height: 125) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          title
          content
        }
      }
    }
  }
`