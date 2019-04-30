import React from 'react';
import { shallow, mount, render } from 'enzyme';
import  CreatePostText from './CreatePostText';

describe('CreatePostText', function() {
  test('it works', function() {
    expect(mount(<CreatePostText />).find('.createPostText').length).toBe(1);
  });

});
