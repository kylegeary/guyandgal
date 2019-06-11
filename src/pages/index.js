import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"

const IndexPage = ({ data }) => (
  <Layout>
    <ul class="posts">
      {data.allStrapiPost.edges.map(document => (
        <li class="post-preview" key={document.node.id}>
          <div class="post-preview__image">
            <Img fixed={document.node.image.childImageSharp.fixed}/>
          </div>
            <div class="post-preview__text">
              <h3 class="post-preview__title">
                <Link class="post-preview__link" to={`/${document.node.id}`}>
                  {document.node.title}
                </Link>
              </h3>
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