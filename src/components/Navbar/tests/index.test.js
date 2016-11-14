import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import Navbar from '../index';

const links: Object[] = [
  {
    name: 'Home',
    url: '/',
  },
];

const logo: string = 'https://github.com/RyanCCollins/cdn/blob/master/misc/logo_placeholder.png?raw=true';

/* eslint-disable */
// $FlowFixMe
describe('<Navbar />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <Navbar links={links} logo={logo} />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
/* eslint-enable */
