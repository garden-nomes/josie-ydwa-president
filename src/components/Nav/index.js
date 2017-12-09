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

const Nav = ({ children }) => (
  <div>
    <ul className={styles.nav} role="navigation">
      <li className={styles.navLinkList}>
        <NavLink to="/">About</NavLink>
        {/* <NavLink to="/blog">Posts</NavLink>
        <NavLink to="/goals">Goals</NavLink> */}
        <NavLink to="/endorsements">Endorsements</NavLink>
      </li>
      <li className={styles.spacer} />
      <li className={styles.socialMediaIcons}>
        <ExternalLink icon="envelope" href="mailto:josie.eva@gmail.com" />
        <ExternalLink icon="twitter" href="https://twitter.com/josie_ellison" />
      </li>
    </ul>
    {children}
    <ul className={styles.navBottom} role="navigation">
      <li>
        <FontAwesome name="star" size="1x" style={{ color: '#891b4d' }} />
      </li>
      <li className={styles.spacer} />
      <li>
        <FontAwesome name="star" size="1x" style={{ color: '#891b4d' }} />
      </li>
    </ul>
  </div>
);

export default Nav;
