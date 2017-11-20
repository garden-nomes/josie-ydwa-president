import React from 'react';
import Link from 'gatsby-link';
import styles from './index.module.css';
import profile from '../content/profile.jpg';
import about from '../content/about.md';

const IndexPage = () => (
  <div>
    <h1>About</h1>
    <img className={styles.headshot} src={profile} />
    <div dangerouslySetInnerHTML={{ __html: about }} />
  </div>
);

export default IndexPage;
