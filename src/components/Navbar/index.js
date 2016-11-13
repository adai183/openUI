import React, { PropTypes, Component } from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.css';
import {
  Menu,
  Title,
  Header,
  Anchor,
  Sidebar,
  Split,
} from 'components';

class Navbar extends Component {
  constructor() {
    super();
    this.renderTitle = this.renderTitle.bind(this);
    this.renderMobile = this.renderMobile.bind(this);
  }
  renderTitle() {
    const {
      logo,
    } = this.props;
    return (
      <Title>
        <img className={styles.logo} src={logo} alt="logo"/>
      </Title>
    );
  }
  renderMobile() {
    const {
      links,
      onToggleMobileNav,
    } = this.props;
    return (
      <Sidebar size="medium" colorIndex="neutral-1" fixed seperator="right">
        {this.renderTitle()}
        <Menu primary>
          {links.map((item, i) =>
            <Anchor key={i} href={item.url} onClick={() => onToggleMobileNav(i)}>
              {item.name}
            </Anchor>
          )}
        </Menu>
      </Sidebar>
    )
  }
  render() {
    const {
      logo,
      links,
      isResponsive,
    } = this.props;
    return (
      <nav className={styles.nav}>
        <Header justify="between">
          {this.renderTitle()}
          <Menu direction="row" align="center" responsive={false}>
            {links.map((item, i) =>
              <Anchor key={i} href={item.url}>
                {item.name}
              </Anchor>
            )}
          </Menu>
        </Header>
      </nav>
    )
  }
}

Navbar.propTypes = {
  logo: PropTypes.string,
  links: PropTypes.array.isRequired,
  isResponsive: PropTypes.bool.isRequired,
  onToggleMobileNav: PropTypes.func
};

Navbar.defaultProps = {
  isResponsive: true,
};

export default cssModules(Navbar, styles);
