import React from 'react';
/* eslint-disable */
import { Navbar, Heading, App } from 'components';
/* eslint-enable */
const links = [
  {
    name: 'Home',
    url: '/',
  },
];

const logo = 'https://github.com/RyanCCollins/cdn/blob/master/misc/logo_placeholder.png?raw=true';

const ExampleApp = () => (
  <App>
    <Navbar links={links} logo={logo} />
    <Heading tag="h3">
      Hello World
    </Heading>
  </App>
);

export default ExampleApp;
