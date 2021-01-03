import React from 'react';
import Layout from '../components/layout.js';
import PostPreview from '../components/post-preview.js';
import usePosts from '../hooks/use-posts.js';

export default () => {
  const posts = usePosts();

  return (
    <Layout>
      <section className="article-list">
        <div className="container">
          <h1 className="heading__secondary color-primary">Latest Articles</h1>

          <div className="article__display">
            {posts
              .sort((a, b) => b.id - a.id)
              .map((post) => (
                // <pre>{JSON.stringify(post, null, 2)}</pre>
                <PostPreview key={post.slug} post={post} />
              ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};
