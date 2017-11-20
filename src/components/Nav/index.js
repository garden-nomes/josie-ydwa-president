import React from 'react';
import Link from 'gatsby-link';
import FontAwesome from 'react-fontawesome';
import styles from './styles.module.css';

const NavLink = ({ to, children }) => (
  <li
    className={window.location.pathname === to ? styles.active : styles.navLink}
  >
    <Link to={to}>{children}</Link>
  </li>
);

const ExternalLink = ({ icon, href }) => (
  <li className={styles.socialMedia}>
    <a href={href} target="_blank">
      <FontAwesome name={icon} fixedWidth />
    </a>
  </li>
);

const Nav = () => (
  <ul className={styles.nav} role="navigation">
    <NavLink to="/">About</NavLink>
    <NavLink to="/endorsements">Endorsments</NavLink>
    <li className={styles.spacer} />
    <ExternalLink icon="envelope" href="#" />
    <ExternalLink icon="twitter" href="https://twitter.com/josie_ellison" />
  </ul>
);

export default Nav;
