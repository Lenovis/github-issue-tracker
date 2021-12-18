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
import {
  FooterComponentView,
  handleIssuesList,
} from '../src/components/IssuesComponents/issueListView';

//---issueListItemicon
test('renders correctly issues list item icon', () => {
  const tree = renderer.create(<IssueListItemImage />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders correctly issues list item icon with state: open', () => {
  const tree = renderer
    .create(<IssueListItemImage state={IssuesState.open} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders correctly issues list item icon with state: open, draft: true', () => {
  const tree = renderer
    .create(<IssueListItemImage state={IssuesState.open} draft={true} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders correctly issues list item icon with state: open, pull request', () => {
  const tree = renderer
    .create(<IssueListItemImage state={IssuesState.open} pull_request={{}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders correctly issues list item icon with state: closed', () => {
  const tree = renderer
    .create(<IssueListItemImage state={IssuesState.closed} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders correctly issues list item icon with state: closed, pull request', () => {
  const tree = renderer
    .create(<IssueListItemImage state={IssuesState.closed} pull_request={{}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders correctly issues list item icon with state: closed, pull request merged at', () => {
  const tree = renderer
    .create(
      <IssueListItemImage
        state={IssuesState.closed}
        pull_request={{ merged_at: new Date() }}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('given state open returns <DotCircleIcon />', () => {
  expect(IssueListItemImage({ state: IssuesState.open })).toStrictEqual(
    <DotCircleIcon />,
  );
});

test('given state open and draft true returns <PullRequestIcon color={theme.colors.grey} />', () => {
  expect(
    IssueListItemImage({
      state: IssuesState.open,
      draft: true,
    }),
  ).toStrictEqual(<PullRequestIcon color={theme.colors.grey} />);
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

//---issueListView
test('renders correctly handleIssuesList(gettingData: true, issues: [])', () => {
  const tree = renderer.create(handleIssuesList(true, [])).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders correctly <FooterComponentView hasPrevPage={true} hasNextPage={true} issuesCurrentPage={1}/>', () => {
  const tree = renderer
    .create(
      <FooterComponentView
        hasNextPage={true}
        hasPrevPage={true}
        issuesCurrentPage={1}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders correctly <FooterComponentView hasPrevPage={false} hasNextPage={false} issuesCurrentPage={1}/>', () => {
  const tree = renderer
    .create(
      <FooterComponentView
        hasNextPage={false}
        hasPrevPage={false}
        issuesCurrentPage={1}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders correctly <FooterComponentView hasPrevPage={true} hasNextPage={false} issuesCurrentPage={1}/>', () => {
  const tree = renderer
    .create(
      <FooterComponentView
        hasNextPage={true}
        hasPrevPage={false}
        issuesCurrentPage={1}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders correctly <FooterComponentView hasPrevPage={false} hasNextPage={true} issuesCurrentPage={1}/>', () => {
  const tree = renderer
    .create(
      <FooterComponentView
        hasNextPage={false}
        hasPrevPage={true}
        issuesCurrentPage={1}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
