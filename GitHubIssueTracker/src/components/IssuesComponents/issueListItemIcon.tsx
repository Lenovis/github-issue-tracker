import React from 'react';
import {
  CheckCircleIcon,
  DotCircleIcon,
  MergedRequestIcon,
  PullRequestIcon,
} from '..';
import { theme } from '../../assets/theme';
import { IssuePullRequest } from '../../types';
import { IssuesState } from '../../utils';

export const IssueListItemImage = ({
  state,
  pull_request,
}: {
  state: IssuesState;
  pull_request: IssuePullRequest;
}) => {
  if (state !== IssuesState.closed) {
    if (pull_request) {
      return <PullRequestIcon />;
    }
    return <DotCircleIcon />;
  }
  if (pull_request) {
    if (pull_request.merged_at) {
      return <MergedRequestIcon />;
    }
    return <PullRequestIcon color={theme.colors.red} />;
  }
  return <CheckCircleIcon />;
};
