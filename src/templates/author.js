import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

const UserTemplate = ({ data }) => (
	<Layout>
		<h1 class="author author__heading">{data.strapiUser.username}</h1>
		<ul class="author__posts">
			{data.strapiUser.posts.map(post => (
				<li class="author__post" key={post.id}>
					<h2 class="author__post-title">
						<Link to={`/Post_${post.id}`}>{post.title}</Link>
					</h2>
					<p class="author__post-content">{post.content}</p>
				</li>
			))}
		</ul>
	</Layout>
)

export default UserTemplate

export const query = graphql`
  query UserTemplate($id: String!) {
    strapiUser(id: { eq: $id }) {
      id
      username
      posts {
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
`