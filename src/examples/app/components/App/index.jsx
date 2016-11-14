import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.css';
/* eslint-disable */
import { Navbar, Heading, App, ResponsiveImage, Section, Box, LoadingIndicator } from 'components';
/* eslint-enable */
const links = [
  {
    name: 'Home',
    url: '/',
  },
];

const logo = 'https://github.com/RyanCCollins/cdn/blob/master/misc/logo_placeholder.png?raw=true';

const ExampleApp = () => (
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
  </App>
);

export default cssModules(ExampleApp, styles);
