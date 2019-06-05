/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`);

const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
	// Query for post nodes to use in creating pages.
	resolve(
		graphql(request).then(result => {
			if (result.errors) {
				reject(result.errors)
			}

			return result;
		})
	)
});


// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ boundActionCreators, graphql }) => {
	const { createPage } = boundActionCreators;

	const getPosts = makeRequest(graphql, `
    {
      allStrapiPost {
        edges {
          node {
            id
          }
        }
      }
    }
    `).then(result => {
		// Create pages for each post.
		result.data.allStrapiPost.edges.forEach(({ node }) => {
			createPage({
				path: `/${node.id}`,
				component: path.resolve(`src/templates/post.js`),
				context: {
					id: node.id,
				},
			})
		})
	});

	const getAuthors = makeRequest(graphql, `
    {
      allStrapiUser {
        edges {
          node {
            id
          }
        }
      }
    }
    `).then(result => {
		// Create pages for each user.
		result.data.allStrapiUser.edges.forEach(({ node }) => {
			createPage({
				path: `/authors/${node.id}`,
				component: path.resolve(`src/templates/author.js`),
				context: {
					id: node.id,
				},
			})
		})
	});

	// Queries for posts and authors nodes to use in creating pages.
	return Promise.all([
		getPosts,
		getAuthors,
	])
};