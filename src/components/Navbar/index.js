import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.css';

const Navbar = ({
  leftMenu,
  rightMenu,
}) => (
  <nav className={styles.nav}>
    <header className={styles.header}>
      {rightMenu}
      {leftMenu}
    </header>
  </nav>
);

Navbar.propTypes = {
  rightMenu: PropTypes.node,
  leftMenu: PropTypes.node,
};

export default cssModules(Navbar, styles);
