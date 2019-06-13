import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default () => (
	<StaticQuery
		query={graphql `
			query allInstaNode {
				allInstaNode {
					nodes {
						original
					}
				}
			}
		`}
		render={data => (
			<section className="instagram">
				<Img className="instagram__post" fluid={data.allInstaNode.nodes.original}/>
			</section>
		)}
	/>
);