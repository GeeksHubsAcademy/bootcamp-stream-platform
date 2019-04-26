import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';

import NotFound from './NotFound';

test('Deberia renderizar Error 404 segun su snapshot', () => {
  const renderer = new ReactShallowRenderer();
  renderer.render(<NotFound />);
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
