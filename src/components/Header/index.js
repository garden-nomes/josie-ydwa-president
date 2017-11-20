import React from 'react';
import FontAwesome from 'react-fontawesome';
import styles from './styles.module.css';

const Header = () => (
  <header role="banner" className={styles.header}>
    <div>
      <h1>Josie Ellison</h1>
    </div>
    <div>
      <h2>
        <FontAwesome name="star" />YDWA President<FontAwesome name="star" />
      </h2>
    </div>
  </header>
);

export default Header;
