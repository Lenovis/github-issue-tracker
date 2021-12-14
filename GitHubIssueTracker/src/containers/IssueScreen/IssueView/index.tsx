import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/native';
import { IssuesListItem } from '../../../components';
import { selectors } from '../../../state/selectors';

export const IssueView = () => {
  const issues = useSelector(selectors.issues.getRepoIssues);

  return (
    <Container>
      {issues.map((issue, index) => (
        <IssuesListItem issue={issue} key={index} />
      ))}
    </Container>
  );
};

const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
`;
