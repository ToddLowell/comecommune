import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
// import styled from '@emotion/styled';
import Layout from '../components/layout.js';
import PostPreview from '../components/post-preview-main-page.js';
import usePosts from '../hooks/use-posts.js';

export default () => {
  // const HeroLayout = styled(Layout)`
  //   > * {
  //     border: 1px solid red;
  //   }

  //   .navbar {
  //     background-color: #ff0000;
  //   }
  // `;
  const { image } = useStaticQuery(graphql`
    {
      image: file(relativePath: { eq: "hero.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const posts = usePosts();
  const row1 = posts.sort((a, b) => b.id - a.id).slice(0, 2);
  const row2 = posts.sort((a, b) => b.id - a.id).slice(2, 4);

  return (
    <Layout>
      <BackgroundImage Tag="header" fluid={image.sharp.fluid} className="header">
        <div className="header__text-box">
          <h1 className="heading__primary">
            <span className="heading__primary--main">Come</span>
            <br />
            <span className="heading__primary--sub">Commune</span>
            <br />
            <span className="heading__primary--subtext">by Brendan Low</span>
          </h1>
        </div>
      </BackgroundImage>

      <section className="article-preview">
        <div className="container">
          <h2 className="heading__secondary">Latest Articles</h2>

          <div className="article__list pd-bt-sm">
            {row1.map((post) => (
              <PostPreview key={post.slug} post={post} />
            ))}
          </div>

          <div className="article__list">
            {row2.map((post) => (
              <PostPreview key={post.slug} post={post} />
            ))}
          </div>
          <Link to="/articles" className="btn">
            View All
          </Link>
        </div>
      </section>
    </Layout>
  );
};
