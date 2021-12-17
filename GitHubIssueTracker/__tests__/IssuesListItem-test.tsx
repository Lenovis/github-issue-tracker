import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {
  CheckCircleIcon,
  DotCircleIcon,
  IssueListItemImage,
  MergedRequestIcon,
  PullRequestIcon,
} from '../src/components';
import 'jest-styled-components';
import { IssuesState } from '../src/utils';
import { IssuePullRequest } from '../src/types';
import { theme } from '../src/assets/theme';

test('renders correctly issues list item icon', () => {
  const tree = renderer.create(<IssueListItemImage />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('given state open returns <DotCircleIcon />', () => {
  expect(IssueListItemImage({ state: IssuesState.open })).toStrictEqual(
    <DotCircleIcon />,
  );
});

test('given state open and header returns <PullRequestIcon />', () => {
  const IssuePullRequestWithoutDate = {} as IssuePullRequest;
  expect(
    IssueListItemImage({
      state: IssuesState.open,
      pull_request: IssuePullRequestWithoutDate,
    }),
  ).toStrictEqual(<PullRequestIcon />);
});

test('given state closed returns <CheckCircleIcon />', () => {
  expect(IssueListItemImage({ state: IssuesState.closed })).toStrictEqual(
    <CheckCircleIcon />,
  );
});

test('given state closed and header wihout merged time returns <PullRequestIcon color={theme.colors.red} />', () => {
  const IssuePullRequestWithoutDate = {} as IssuePullRequest;
  expect(
    IssueListItemImage({
      state: IssuesState.closed,
      pull_request: IssuePullRequestWithoutDate,
    }),
  ).toStrictEqual(<PullRequestIcon color={theme.colors.red} />);
});

test('given state closed and header with merged time returns <MergedRequestIcon />', () => {
  const IssuePullRequestWithtDate = {
    merged_at: new Date(),
  } as IssuePullRequest;
  expect(
    IssueListItemImage({
      state: IssuesState.closed,
      pull_request: IssuePullRequestWithtDate,
    }),
  ).toStrictEqual(<MergedRequestIcon />);
});
