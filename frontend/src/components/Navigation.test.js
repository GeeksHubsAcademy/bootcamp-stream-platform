import React from 'react';
import { shallow } from 'enzyme';

import { NavigationComponent } from './Navigation';


test('Check not logged on props is correct', () => {
  const wrapper = shallow(<NavigationComponent user={null} />);

  expect(wrapper.find('.notLogged')).toHaveLength(1);
  expect(wrapper.find('.logged')).toHaveLength(0);

});


test('Check  logged on props is correct', () => {
  const wrapper = shallow(<NavigationComponent user={{}} />);

  expect(wrapper.find('.notLogged')).toHaveLength(0);
  expect(wrapper.find('.logged')).toHaveLength(1);

});


test('Check different renders for navigation', () => {
  const wrapper = shallow(<NavigationComponent user={{role:'admin'}} />);

  expect(wrapper.find('.adminLink')).toHaveLength(1);

});

test('Check different renders for navigation', () => {
  const wrapper = shallow(<NavigationComponent user={{ role: 'student' }} />);

  expect(wrapper.find('.adminLink')).toHaveLength(0);

});
