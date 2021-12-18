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
  draft = false,
}: {
  state?: IssuesState;
  pull_request?: IssuePullRequest | null;
  draft?: boolean | undefined;
}) => {
  if (state === IssuesState.open) {
    if (draft) {
      return <PullRequestIcon color={theme.colors.grey} />;
    }
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
