import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';
import styled from 'styled-components/native';
import { IssuesListItem } from '..';
import { selectors } from '../../state/selectors';
import { Issue } from '../../types';

export const IssueList = (issues: Issue[]) => {
  const gettingData = useSelector(selectors.ui.getRepoIssuesOnSync);
  if (gettingData) {
    return (
      <ActivityIndicatorWrapper>
        <ActivityIndicator size="large" />
      </ActivityIndicatorWrapper>
    );
  }
  return issues.map((issue, index) => (
    <IssuesListItem issue={issue} key={index} />
  ));
};

const ActivityIndicatorWrapper = styled.View`
  align-items: center;
  margin-top: 70px;
`;
