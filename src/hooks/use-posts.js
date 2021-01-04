import { graphql, useStaticQuery } from 'gatsby';

const usePosts = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     allMdx {
  //       nodes {
  //         frontmatter {
  //           title
  //           id
  //           slug
  //           date
  //         }
  //         excerpt(pruneLength: 260)
  //       }
  //     }
  //   }
  // `);

  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "articles" }, absolutePath: { regex: "/.md/" } }) {
        nodes {
          childMdx {
            frontmatter {
              title
              path
              date
            }
            excerpt(pruneLength: 260)
          }
        }
      }
    }
  `);

  return data.allFile.nodes.map((postRaw) => {
    const post = postRaw.childMdx;

    return {
      title: post.frontmatter.title,
      path: post.frontmatter.path,
      id: post.frontmatter.ID,
      date: post.frontmatter.date,
      excerpt: post.excerpt,
    };
  });
};

export default usePosts;
