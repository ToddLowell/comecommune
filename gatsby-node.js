exports.onCreateNode = ({ node }) => {
  // modify image path in frontmatter so Sharp plugin can find it
  if (node.internal.type === 'Mdx') {
    if (node.frontmatter.image) {
      node.frontmatter.image = `../static${node.frontmatter.image}`;
    }
  }
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMdx(sort: { fields: [frontmatter___date], order: ASC }) {
        nodes {
          frontmatter {
            title
            path
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic('Failed to Create Post Pages', result.errors);
  }

  const posts = result.data.allMdx.nodes;

  posts.forEach((post, i) => {
    const title = post.frontmatter.title;
    const title_prev = posts[i - 1] ? posts[i - 1].frontmatter.title : '';
    const title_next = posts[i + 1] ? posts[i + 1].frontmatter.title : '';

    actions.createPage({
      path: `/articles/${post.frontmatter.path}`,
      component: require.resolve('./src/templates/post.js'),
      context: {
        title,
        title_prev,
        title_next,
      },
    });
  });
};
