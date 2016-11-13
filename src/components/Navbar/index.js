import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.css';
import {
  Menu,
  Title,
  Header,
  Anchor,
} from 'components';

const Navbar = ({
  logo,
  links,
}) => (
  <nav className={styles.nav}>
    <Header justify="between">
      <Title>
        <img className={styles.logo} src={logo} alt="logo"/>
      </Title>
      <Menu direction="row" align="center" responsive={false}>
        {links.map((item, i) =>
          <Anchor key={i} href={item.url}>
            {item.name}
          </Anchor>
        )}
      </Menu>
    </Header>
  </nav>
);

Navbar.propTypes = {
  logo: PropTypes.string,
  links: PropTypes.array.isRequired,
};

export default cssModules(Navbar, styles);
