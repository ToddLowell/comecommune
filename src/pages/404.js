import React from 'react';
import Layout from '../components/layout.js';

export default () => (
  <Layout>
    <div className="error404">
      <div className="center align-center">
        <p className="error404--text">Oops, there's nothing here! That's okay, everyone makes mistakes.</p>
        <p className="error404--text">Click the button to return to the home page:</p>
        <a href="index.html" className="btn">
          Go Home
        </a>
      </div>
    </div>
  </Layout>
);
