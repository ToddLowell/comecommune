import { graphql, useStaticQuery } from 'gatsby';

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            title
            id
            slug
            date
          }
          excerpt(pruneLength: 260)
        }
      }
    }
  `);

  return data.allMdx.nodes.map((post) => ({
    title: post.frontmatter.title,
    id: post.frontmatter.id,
    slug: post.frontmatter.slug,
    date: post.frontmatter.date,
    excerpt: post.excerpt,
  }));
};

export default usePosts;
