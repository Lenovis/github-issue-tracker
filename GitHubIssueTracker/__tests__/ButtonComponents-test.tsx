import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { BackButton, DefaultButton, NextButton } from '../src/components';
import 'jest-styled-components';
import { ActivityIndicator } from 'react-native';
import {
  ButtonContent,
  ButtonText,
} from '../src/components/buttons/DefaultButton';

test('renders correctly default button', () => {
  const tree = renderer.create(<DefaultButton />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders correctly default button dissabled true', () => {
  const tree = renderer.create(<DefaultButton disabled={true} />).toJSON();
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

test('given isLoading: true, disabled: false returns <ActivityIndicator />', () => {
  expect(
    ButtonContent({ isLoading: true, disabled: false, text: '' }),
  ).toStrictEqual(<ActivityIndicator />);
});

test('given isLoading: false, disabled: false returns <ActivityIndicator />', () => {
  const testText = 'button';
  expect(
    ButtonContent({ isLoading: false, disabled: false, text: testText }),
  ).toStrictEqual(<ButtonText disabled={false}>{testText}</ButtonText>);
});

test('given isLoading: false, disabled: true returns <ActivityIndicator />', () => {
  const testText = 'button';
  expect(
    ButtonContent({ isLoading: false, disabled: true, text: testText }),
  ).toStrictEqual(<ButtonText disabled={true}>{testText}</ButtonText>);
});
