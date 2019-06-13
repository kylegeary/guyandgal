import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import ReactMarkdown from "react-markdown"

const PostTemplate = ({ data }) => (
	<Layout>
    <div className="post">
      <Img fluid={data.strapiPost.image.childImageSharp.fluid} />
      <div className="post__text">
        <h1 className="post__title">{data.strapiPost.title}</h1>
        <p className="post__author">by <Link to={`/authors/User_${data.strapiPost.author.id}`}>{data.strapiPost.author.username}</Link></p>
        <ReactMarkdown className="post__content"
          source={data.strapiPost.content}
        />
      </div>
    </div>
	</Layout>
)

export default PostTemplate

export const query = graphql`
  query PostTemplate($id: String!) {
    strapiPost(id: {eq: $id}) {
      title
      content
      image {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      author {
        id
        username
      }
    }
  }
`