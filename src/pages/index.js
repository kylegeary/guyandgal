import React from "react"
import BackgroundImage from "gatsby-background-image"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Truncate from "react-truncate"
import Insta from "../components/instagram"

const IndexPage = ({ data }) => (
  <Layout>
    <section className="section posts">
      <div className="section__posts">
        <h2 className="posts__header">Latest Posts</h2>
        <ul className="cards">
          {data.allStrapiPost.nodes.map(document => (
            <li className="card" key={document.id}>
              <BackgroundImage
                className="card__image"
                fluid={document.image.childImageSharp.fixed}
              />
              <div className="card__text">
                <span className="card__category">{document.category}</span>
                <h3 className="card__title">
                  <Link className="post-preview__link" to={`/${document.id}`}>
                    {document.title}
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
                    {document.postpreview}
                  </Truncate>
                </p>
                <Link className="card__cta" to={`/${document.id}`}>
                  Read More
                </Link>
              </div>
            </li>
          ))}
        </ul>
        <Link className="arrow-link" to="/posts">
          See more &rarr;
        </Link>
      </div>
    </section>
    <section className="section section--instagram">
      <div className="section__instagram">
        <Insta />
      </div>
    </section>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiPost(limit: 4, sort: { order: DESC, fields: id }) {
      nodes {
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
`
