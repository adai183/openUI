import React from 'react';
import { Navbar } from 'components';
const links = [
  {
    name: 'Home',
    url: '/'
  },
];

const logo = 'https://github.com/RyanCCollins/cdn/blob/master/misc/logo_placeholder.png?raw=true';

const App = () => (
  <div>
    <Navbar links={links} logo={logo} />
  </div>
);

export default App;
