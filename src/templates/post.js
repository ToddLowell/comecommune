import React from 'react';
import { Link, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/layout.js';
import { css } from '@emotion/react';

export const query = graphql`
  query($title: String!, $title_prev: String!, $title_next: String!) {
    mdx(frontmatter: { title: { eq: $title } }) {
      frontmatter {
        title
        date
        image
        image_alt
        image_credit
      }
      body
    }
    prev: mdx(frontmatter: { title: { eq: $title_prev } }) {
      frontmatter {
        path
        title
      }
    }
    next: mdx(frontmatter: { title: { eq: $title_next } }) {
      frontmatter {
        path
        title
      }
    }
  }
`;

const PostTemplate = ({ /*pageContext,*/ data: { mdx: post, prev: prev_post, next: next_post } }) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const dateRaw = new Date(post.frontmatter.date);
  const date = `${months[dateRaw.getMonth()]} ${dateRaw.getDate()}, ${dateRaw.getFullYear()}`;

  return (
    <Layout>
      {/* <pre>{JSON.stringify(pageContext, null, 2)}</pre> */}
      <section className="article">
        <article className="container">
          <h1 className="heading__tertiary">{post.frontmatter.title}</h1>
          <p
            className="paragraph"
            css={css`
              margin-top: 0rem;
            `}
          >
            <i className="icofont-clock-time"></i>
            {date}
          </p>
          {(() => {
            if (post.frontmatter.image) {
              return <img src={post.frontmatter.image} alt={post.frontmatter.image_alt || ''} />;
            }
          })()}
          {(() => {
            if (post.frontmatter.image_credit) {
              return (
                <p
                  className="paragraph"
                  css={css`
                    margin-top: 0.5rem;
                  `}
                >
                  (Photo Credit: {post.frontmatter.image_credit})
                </p>
              );
            }
          })()}
          <p
            className="paragraph--article"
            css={css`
              ///////////
              // table //
              ///////////

              table {
                border-collapse: collapse;
                display: flex;
                justify-content: center;
                margin: 2rem 0;

                & td,
                th {
                  border: 1px solid #ddd;
                  border-width: 1px 0 1px 0;
                  text-align: left;
                  padding: 8px;
                }

                & th {
                  border-top: none;
                }

                & tr:nth-of-type(even) {
                  background-color: #f7f7f7;
                }
              }
            `}
          >
            <MDXRenderer>{post.body}</MDXRenderer>
          </p>

          {/* disqus */}

          <div
            className="selector"
            css={css`
              * + * {
                margin-top: 0;
              }
            `}
          >
            {(() => {
              if (prev_post) {
                return (
                  <div className="selector__prev">
                    <i className="icofont-rounded-left"></i>
                    <div>
                      <h4>Previous Article</h4>
                      <h3 className="heading__tertiary">{prev_post.frontmatter.title}</h3>
                      <Link to={`/articles/${prev_post.frontmatter.path}`} className="selector__prev--btn">
                        Read More
                      </Link>
                    </div>
                  </div>
                );
              }
            })()}
            {(() => {
              if (next_post) {
                return (
                  <div className="selector__next">
                    <div>
                      <h4>Next Article</h4>
                      <h3 className="heading__tertiary">{next_post.frontmatter.title}</h3>
                      <Link to={`/articles/${next_post.frontmatter.path}`} className="selector__next--btn">
                        Read More
                      </Link>
                    </div>
                    <i className="icofont-rounded-right"></i>
                  </div>
                );
              }
            })()}
          </div>
        </article>
      </section>
    </Layout>
  );
};

export default PostTemplate;
