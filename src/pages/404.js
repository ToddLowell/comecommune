import React from 'react';
import Layout from '../components/layout.js';

export default () => (
  <Layout>
    <div class="error404">
      <div class="center align-center">
        <p class="error404--text">Oops, there's nothing here! That's okay, everyone makes mistakes.</p>
        <p class="error404--text">Click the button to return to the home page:</p>
        <a href="index.html" class="btn">
          Go Home
        </a>
      </div>
    </div>
  </Layout>
);
