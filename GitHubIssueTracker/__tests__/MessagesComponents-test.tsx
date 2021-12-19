import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { ToastMessage } from '../src/components';
import 'jest-styled-components';
import * as reactRedux from 'react-redux';

describe('renders correctly', () => {
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');

  beforeEach(() => {
    useDispatchMock.mockImplementation();
  });
  afterEach(() => {
    useDispatchMock.mockClear();
  });

  test('<ToastMessage infoText="test" show={true}/>', () => {
    const tree = renderer
      .create(<ToastMessage infoText="test" show={true} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('<ToastMessage infoText="test" show={false}/>', () => {
    const tree = renderer
      .create(<ToastMessage infoText="test" show={false} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
