import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from "gatsby-image"
import Layout from '../components/layout'
import Truncate from "react-truncate"


const UserTemplate = ({ data }) => (
	<Layout>
		<section className="posts">
			<h1 className="posts__header">{data.strapiUser.username}'s Latest Posts</h1>
			<ul className="cards">
			{data.strapiUser.posts.map(post => (
				<li className="card" key={post.id}>
					<Img className="card__image" fluid={post.image.childImageSharp.fixed} />
					<div className="card__text">
						<span className="card__category">{post.category}</span>
						<h3 className="card__title">
							<Link className="post-preview__link" to={`/${post.id}`}>
								{post.title}
							</Link>
						</h3>
						<p className="card__content">
							<Truncate lines={3} ellipsis={<><span>...</span></>}>
								{post.postpreview}
							</Truncate>
						</p>
						<Link className="card__cta" to={`/Post_${post.id}`}>Read More</Link>
					</div>
				</li>
			))}
		</ul>
		</section>
	</Layout>
)

export default UserTemplate

export const query = graphql`
  query UserTemplate($id: String!) {
    strapiUser(id: { eq: $id }) {
		posts {
			category
			id
			postpreview
			image {
				childImageSharp {
					fixed(width: 500, height: 500) {
						src
					}
				}
			}
			title
		}
		username
	}
}
`