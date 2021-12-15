import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/native';
import { BackButton, IssuesListItem, NextButton } from '..';
import { actions } from '../../state/actions';
import { selectors } from '../../state/selectors';
import { Issue } from '../../types';

export const IssueList = (issues: Issue[]) => {
  const dispatch = useDispatch();

  const gettingData = useSelector(selectors.ui.getRepoIssuesOnSync);
  const repo = useSelector(selectors.repo.getRepoName);
  const owner = useSelector(selectors.repo.getRepoOwner);
  const issuesCurrentPage = useSelector(selectors.issues.getIssuesCurrentPage);
  const hasPrevPage = useSelector(selectors.issues.getIssuesHasPrevPage);
  const hasNextPage = useSelector(selectors.issues.getIssuesHasNextPage);

  const handleNextPress = () => {
    dispatch(
      actions.issues.getRepoIssues({
        owner,
        repo,
        page: issuesCurrentPage + 1,
      }),
    );
  };

  const handleBackPress = () => {
    dispatch(
      actions.issues.getRepoIssues({
        owner,
        repo,
        page: issuesCurrentPage - 1,
      }),
    );
  };
  if (gettingData) {
    return (
      <ActivityIndicatorWrapper>
        <ActivityIndicator size="large" />
      </ActivityIndicatorWrapper>
    );
  }
  return (
    <>
      {issues.map((issue, index) => (
        <IssuesListItem issue={issue} key={index} />
      ))}
      <FooterComponent>
        {hasPrevPage ? (
          <PageButtonWrapper>
            <BackButton onPress={handleBackPress} />
          </PageButtonWrapper>
        ) : (
          <PageButtonWrapper />
        )}
        <PageText>{`${issuesCurrentPage} page`}</PageText>
        {hasNextPage ? (
          <PageButtonWrapper>
            <NextButton onPress={handleNextPress} />
          </PageButtonWrapper>
        ) : (
          <PageButtonWrapper />
        )}
      </FooterComponent>
    </>
  );
};

const ActivityIndicatorWrapper = styled.View`
  align-items: center;
  margin-top: 70px;
`;

const FooterComponent = styled.View`
  margin: 0px 10px;
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const PageText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
`;

const PageButtonWrapper = styled.View`
  flex: 1;
`;
