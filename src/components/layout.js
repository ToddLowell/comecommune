import React from 'react';
import Navbar from './nav.js';
import Footer from './footer.js';
import Helmet from 'react-helmet';
import useSiteMetadata from '../hooks/use-sitemetadata.js';

import '../scss/main.scss';
import '../icofont/icofont.css';

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Abel&display=swap" rel="stylesheet" />
      </Helmet>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
