import React from 'react';
import Link from 'gatsby-link';
import FontAwesome from 'react-fontawesome';
import styles from './styles.module.css';

const NavLink = ({ to, children }) => (
  <Link
    className={
      typeof window !== 'undefined' && window.location.pathname === to
        ? styles.active
        : styles.navLink
    }
    to={to}
  >
    {children}
  </Link>
);

const ExternalLink = ({ icon, href }) => (
  <a className={styles.socialMedia} href={href} target="_blank">
    <FontAwesome name={icon} fixedWidth />
  </a>
);

const Nav = () => (
  <ul className={styles.nav} role="navigation">
    <li>
      <NavLink to="/">About</NavLink>
      <NavLink to="/endorsements">Endorsements</NavLink>
    </li>
    <li className={styles.spacer} />
    <li>
      <ExternalLink icon="envelope" href="mailto:josie.eva@gmail.com" />
      <ExternalLink icon="twitter" href="https://twitter.com/josie_ellison" />
    </li>
  </ul>
);

export default Nav;
