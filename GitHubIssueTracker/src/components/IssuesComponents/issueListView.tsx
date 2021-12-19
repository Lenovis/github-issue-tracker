import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/native';
import { BackButton, IssuesListItem, NextButton } from '..';
import { theme } from '../../assets/theme';
import { actions } from '../../state/actions';
import { selectors } from '../../state/selectors';
import { Issue } from '../../types';

export const FooterComponentView = ({
  hasPrevPage,
  hasNextPage,
  handleBackPress,
  handleNextPress,
  issuesCurrentPage,
}: {
  hasPrevPage: boolean;
  hasNextPage: boolean;
  handleBackPress?: () => void;
  handleNextPress?: () => void;
  issuesCurrentPage: number;
}) => (
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
);

export const ListPagination = ({ hasPages }: { hasPages: boolean }) => {
  const dispatch = useDispatch();

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

  if (hasPages) {
    return (
      <FooterComponentView
        hasNextPage={hasNextPage}
        hasPrevPage={hasPrevPage}
        handleNextPress={handleNextPress}
        handleBackPress={handleBackPress}
        issuesCurrentPage={issuesCurrentPage}
      />
    );
  }
  return null;
};

export const IssueList = (issues: Issue[]) => {
  const gettingData = useSelector(selectors.ui.getRepoIssuesOnSync);

  if (gettingData) {
    return (
      <ActivityIndicatorWrapper>
        <ActivityIndicator size="large" />
      </ActivityIndicatorWrapper>
    );
  }
  return (
    <View>
      {issues.map((issue, index) => (
        <IssuesListItem issue={issue} key={index} />
      ))}
      <ListPagination hasPages={issues.length > 0} />
    </View>
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
  color: ${theme.colors.white};
  font-weight: bold;
`;

const PageButtonWrapper = styled.View`
  flex: 1;
`;
