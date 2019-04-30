import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { Navigation } from './Navigation';

describe('Navigation', function() {
  it('Check not logged on props is correct', function() {
    expect(mount(<Navigation user={null} />).find('.notLogged').length).toBe(1);
    expect(mount(<Navigation user={null} />).find('.logged').length).toBe(0);
  });
  it('Check  logged on props is correct', function() {
    expect(mount(<Navigation user={{}} />).find('.notLogged').length).toBe(0);
    expect(mount(<Navigation user={{}} />).find('.logged').length).toBe(1);
  });

  // it('should be selectable by class "foo"', function() {
  //   expect(shallow(<Foo />).is('.foo')).toBe(true);
  // });

  // it('should mount in a full DOM', function() {
  //   expect(mount(<Foo />).find('.foo').length).toBe(1);
  // });

  // it('should render to static HTML', function() {
  //   expect(render(<Foo />).text()).toEqual('Bar');
  // });
});

// test('Check not logged on props is correct', () => {
// const wrapper = shallow(<Navigation user={null} />);

// expect(wrapper.find('.notLogged')).toHaveLength(1);
// expect(wrapper.find('.logged')).toHaveLength(0);

// });

// test('Check  logged on props is correct', () => {
//   const wrapper = shallow(<Navigation user={{}} />);

//   expect(wrapper.find('.notLogged')).toHaveLength(0);
//   expect(wrapper.find('.logged')).toHaveLength(1);

// });

// test('Check different renders for navigation', () => {
//   const wrapper = shallow(<Navigation user={{role:'admin'}} />);

//   expect(wrapper.find('.adminLink')).toHaveLength(1);

// });

// test('Check different renders for navigation', () => {
//   const wrapper = shallow(<Navigation user={{ role: 'student' }} />);

//   expect(wrapper.find('.adminLink')).toHaveLength(0);

// });
