import React from 'react';
import Link from 'gatsby-link';
import endorsements from '../content/endorsements.md';

const EndorsementsPage = () => (
  <div>
    <h1>Endorsements</h1>
    <div dangerouslySetInnerHTML={{ __html: endorsements }} />
    <p>
      <Link to="/endorse">Want to add your name?</Link>
    </p>
  </div>
);

export default EndorsementsPage;
