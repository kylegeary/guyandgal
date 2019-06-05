import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'

const PostTemplate = ({ data }) => (
	<Layout>
		<h1>{data.strapiPost.title}</h1>
		<p>by <Link to={`/authors/User_${data.strapiPost.author.id}`}>{data.strapiPost.author.username}</Link></p>
		<Img fluid={data.strapiPost.image.childImageSharp.fluid} />
		<p>{data.strapiPost.content}</p>
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
            fluid(maxWidth: 500) {
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