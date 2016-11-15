import React, { Component } from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.css';
/* eslint-disable */
import {
  Navbar,
  Heading,
  App,
  ResponsiveImage,
  Section,
  Box,
  LoadingIndicator,
  ToastMessage,
  Button,
} from 'components';
/* eslint-enable */
const links = [
  {
    name: 'Home',
    url: '/',
  },
];

const logo = 'https://github.com/RyanCCollins/cdn/blob/master/misc/logo_placeholder.png?raw=true';

class ExampleApp extends Component {
  constructor() {
    super();
    this.handleToggleToast = this.handleToggleToast.bind(this);
    this.state = {
      isShowingToast: false,
      status: 'critical',
      message: 'An example toast',
    };
  }
  handleToggleToast(isShowing, status) {
    this.setState({
      isShowingToast: isShowing,
      status,
    });
  }
  render() {
    return (
      <App centered={false} inline>
        <Navbar links={links} logo={logo} />
        <Section pad="large" align="center" justify="center">
          <Heading tag="h2" strong align="center">
            Responsive Image
          </Heading>
          <Box className={styles.image}>
            <ResponsiveImage matchHeight={false} />
          </Box>
        </Section>
        <Section>
          <Heading tag="h2" strong align="center">
            Loading Indicator
          </Heading>
          <LoadingIndicator />
        </Section>
        <Section align="center" justify="center">
          <Heading tag="h2" strong align="center">
            Toast Message
          </Heading>
          {this.state.isShowingToast &&
            <ToastMessage
              message={this.state.message}
              status={this.state.status}
              onClose={() => this.handleToggleToast(false, '')}
            />
          }
          <Box direction="column" pad="medium">
            <Box pad="medium">
              <Button
                onClick={() => this.handleToggleToast(true, 'critical')}
                label="Toggle Critical Toast"
              />
            </Box>
            <Box pad="medium">
              <Button
                onClick={() => this.handleToggleToast(true, 'warning')}
                label="Toggle Warning Toast"
              />
            </Box>
            <Box pad="medium">
              <Button
                onClick={() => this.handleToggleToast(true, 'ok')}
                label="Toggle OK Toast"
              />
            </Box>
            <Box pad="medium">
              <Button
                onClick={() => this.handleToggleToast(true, 'disabled')}
                label="Toggle Disabled Toast"
              />
            </Box>
          </Box>
        </Section>
      </App>
    );
  }
}

export default cssModules(ExampleApp, styles);
