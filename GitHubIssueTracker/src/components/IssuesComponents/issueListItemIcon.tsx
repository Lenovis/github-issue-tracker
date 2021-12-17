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
  state = IssuesState.open,
  pull_request = null,
}: {
  state?: IssuesState;
  pull_request?: IssuePullRequest | null;
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
