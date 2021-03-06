import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import Layout from '../components/layout.js';
import PostPreview from '../components/post-preview-main-page.js';
import usePosts from '../hooks/use-posts.js';

export default () => {
  const { image } = useStaticQuery(graphql`
    {
      image: file(relativePath: { eq: "hero.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1605, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const posts = usePosts();
  const row1 = posts.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 2);
  const row2 = posts.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(2, 4);

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

      <section className="article--preview__container">
        <div className="container">
          <h2 className="heading__secondary">Latest Articles</h2>

          <div className="article__list pd-bt-sm">
            {row1.map((post) => (
              <PostPreview key={post.title} post={post} />
            ))}
          </div>

          <div className="article__list">
            {row2.map((post) => (
              <PostPreview key={post.title} post={post} />
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
