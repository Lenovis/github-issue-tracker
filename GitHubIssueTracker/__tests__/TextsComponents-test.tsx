import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { HeaderText } from '../src/components';

test('renders correctly <HeaderText text="test" />', () => {
  const tree = renderer.create(<HeaderText text="test" />).toJSON();
  expect(tree).toMatchSnapshot();
});
