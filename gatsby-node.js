exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            id
            slug
          }
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panic('Failed to Create Post Pages', result.errors);
  }

  const posts = result.data.allMdx.nodes;

  posts.forEach((post) => {
    const id = post.frontmatter.id;

    actions.createPage({
      path: `/articles/${post.frontmatter.slug}`,
      component: require.resolve('./src/templates/post.js'),
      context: {
        id,
        id_prev: id - 1,
        id_next: id + 1,
      },
    });
  });
};
