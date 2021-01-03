import React from 'react';
import { Link, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Img from 'gatsby-image';
import Layout from '../components/layout.js';
import { css } from '@emotion/react';

export const query = graphql`
  query($id: Int!, $id_prev: Int!, $id_next: Int!) {
    mdx(frontmatter: { id: { eq: $id } }) {
      frontmatter {
        title
        date
        image {
          sharp: childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        image_alt
        image_credit
      }
      body
    }
    prev: mdx(frontmatter: { id: { eq: $id_prev } }) {
      frontmatter {
        slug
        title
      }
    }
    next: mdx(frontmatter: { id: { eq: $id_next } }) {
      frontmatter {
        slug
        title
      }
    }
  }
`;

const PostTemplate = ({ /*pageContext,*/ data: { mdx: post, prev: prev_post, next: next_post } }) => {
  return (
    <Layout>
      {/* <pre>{JSON.stringify(pageContext, null, 2)}</pre> */}
      <section className="article-view">
        <div className="container">
          <h2 className="heading__tertiary align-center">{post.frontmatter.title}</h2>
          <p className="paragraph paragraph--date align-center">
            <i className="icofont-clock-time"></i>
            {post.frontmatter.date}
          </p>
          {(() => {
            if (post.frontmatter.image) {
              return (
                <Img
                  fluid={post.frontmatter.image.sharp.fluid}
                  alt={post.frontmatter.image_alt}
                  className="center-image"
                  css={css`
                    margin-bottom: 2rem;
                  `}
                />
              );
            }
          })()}
          {(() => {
            if (post.frontmatter.image_credit) {
              return (
                <p
                  className="paragraph align-center"
                  css={css`
                    margin-top: -1rem;
                    margin-bottom: 2rem;
                  `}
                >
                  (Photo Credit: {post.frontmatter.image_credit})
                </p>
              );
            }
          })()}
          <p className="paragraph paragraph--article">
            <MDXRenderer>{post.body}</MDXRenderer>
          </p>

          {/* disqus */}

          <div className="selector">
            {(() => {
              if (prev_post) {
                return (
                  <div className="selector__prev">
                    <i className="icofont-rounded-left"></i>
                    <div>
                      <h4>Previous Article</h4>
                      <h3 className="heading__tertiary">{prev_post.frontmatter.title}</h3>
                      <Link to={`/articles/${prev_post.frontmatter.slug}`} className="selector__prev--btn">
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
                      <Link to={`/articles/${next_post.frontmatter.slug}`} className="selector__next--btn">
                        Read More
                      </Link>
                    </div>
                    <i className="icofont-rounded-right"></i>
                  </div>
                );
              }
            })()}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PostTemplate;
