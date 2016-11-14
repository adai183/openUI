import React, { PropTypes, Component } from 'react';
import cssModules from 'react-css-modules';
/* eslint-disable */
import {
  Menu,
  Title,
  Header,
  Anchor,
  Sidebar,
  Split,
  MenuIcon,
  Button,
  CloseIcon,
} from 'components';
/* eslint-enable */
import styles from './index.module.css';

class Navbar extends Component {
  static propTypes = {
    logo: PropTypes.string,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      }),
    ),
    isResponsive: PropTypes.bool.isRequired,
  };
  static defaultProps = {
    isResponsive: true,
  };
  constructor() {
    super();
    this.renderTitle = this.renderTitle.bind(this);
    this.renderMobile = this.renderMobile.bind(this);
    this.renderMobileMenu = this.renderMobileMenu.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.handleToggleMobileMenu = this.handleToggleMobileMenu.bind(this);
    this.renderMobileIcon = this.renderMobileIcon.bind(this);
    this.renderRightMenu = this.renderRightMenu.bind(this);
    this.state = {
      mobileNav: {
        active: false,
        isMobile: false,
      },
    };
  }
  componentDidMount() {
    if (this.props.isResponsive) {
      if (typeof window !== 'undefined') {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
      }
    }
  }
  componentWillUnmount() {
    if (this.props.isResponsive) {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', this.handleResize);
      }
    }
  }
  handleToggleMobileMenu() {
    const { active, isMobile } = this.state.mobileNav;
    this.setState({
      mobileNav: {
        active: !active,
        isMobile,
      },
    });
  }
  handleResize() {
    const isMobile = window.innerWidth <= 768;
    this.setState({
      mobileNav: {
        isMobile,
        active: this.state.mobileNav.active,
      },
    });
  }
  renderTitle() {
    const {
      logo,
    } = this.props;
    return (
      <Title>
        <img className={styles.logo} src={logo} alt="logo" />
      </Title>
    );
  }
  renderMobileMenu() {
    const {
      links,
    } = this.props;
    return (
      <Sidebar size="medium" colorIndex="brand" fixed seperator="right">
        {this.state.mobileNav.active &&
          <Header
            justify="between"
            pad={{ horizontal: 'medium' }}
            large
          >
            {this.renderTitle()}
            <Menu responsive={false} className={styles.navCloser}>
              <Button
                plain
                icon={<CloseIcon />}
                onClick={this.handleToggleMobileMenu}
              />
            </Menu>
          </Header>
        }
        <Menu primary>
          {links.map((item, i) => (
            <Anchor key={i} href={item.url} onClick={() => this.handleToggleMobileMenu()}>
              {item.name}
            </Anchor>
          ))}
        </Menu>
      </Sidebar>
    );
  }
  renderMobile() {
    return (
      <Split
        flex={this.state.mobileNav.active ? '' : 'right'}
        priority={this.state.mobileNav.active ? 'left' : 'right'}
      >
        {this.state.mobileNav.active && this.renderMobileMenu()}
      </Split>
    );
  }
  renderMobileIcon() {
    return (
      <Title onClick={this.handleToggleMobileMenu} a11yTitle="Open Menu Right">
        <MenuIcon
          colorIndex="brand"
          size="medium"
          type="control"
        />
      </Title>
    );
  }
  renderRightMenu() {
    const {
      links,
    } = this.props;
    return (
      <Menu direction="row" align="center" responsive={false}>
        {links.map((item, i) => (
          <Anchor key={i} href={item.url}>
            {item.name}
          </Anchor>
        ))}
      </Menu>
    );
  }
  render() {
    const {
      isResponsive,
    } = this.props;
    return (
      <nav className={styles.nav}>
        {!this.state.mobileNav.active &&
          <Header justify="between">
            {this.renderTitle()}
            {this.state.mobileNav.isMobile && this.renderMobileIcon()}
            {!this.state.mobileNav.isMobile && this.renderRightMenu()}
          </Header>
        }
        {isResponsive && this.renderMobile()}
      </nav>
    );
  }
}

export default cssModules(Navbar, styles);
