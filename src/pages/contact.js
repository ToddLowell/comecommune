import React from 'react';
import Layout from '../components/layout.js';

export default () => (
  <Layout>
    <div className="container">
      <section className="section-form">
        <h1 className="heading__secondary color-primary">Contact</h1>
        <h2 className="heading__tertiary">Send Me a Message</h2>
        <form method="post" className="contact-form" data-netlify="true" name="contact">
          <div className="contact-form--row">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" placeholder="Your name" required />
          </div>
          <div className="contact-form--row">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder="Your email" required />
          </div>
          <div className="contact-form--row">
            <label htmlFor="news">Newsletter?</label>
            <input type="checkbox" name="news" id="news" />
          </div>
          <div className="contact-form--row">
            <label htmlFor="message">Drop me a line</label>
            <textarea name="message" id="message" placeholder="Your message"></textarea>
          </div>
          <input type="submit" value="Send!" />
        </form>
      </section>
      <section className="section-email">
        <h2 className="heading__tertiary">Want to contribute your artcile?</h2>
        <br />
        <h3>Get in touch with me here: bsll2@cam.ac.uk</h3>
      </section>
    </div>
  </Layout>
);
