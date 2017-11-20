import React from 'react';
import Link from 'gatsby-link';

const NotFoundPage = () => (
  <div>
    <h1>Not found</h1>
    <p>
      Hmm&hellip; that page doesn't seem to exist. Maybe{' '}
      <Link to="/">head back to the about page</Link>?
    </p>
  </div>
);

export default NotFoundPage;
