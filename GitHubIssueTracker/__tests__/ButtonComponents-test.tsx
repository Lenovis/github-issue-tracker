import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { BackButton, DefaultButton, NextButton } from '../src/components';
import 'jest-styled-components';

test('renders correctly default button', () => {
  const tree = renderer.create(<DefaultButton />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders correctly next button', () => {
  const tree = renderer.create(<NextButton />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders correctly back button', () => {
  const tree = renderer.create(<BackButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
