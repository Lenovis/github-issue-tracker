import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';

export const IssueRepoView = () => {
  return (
    <Container>
      <Text>Issue Repo screen</Text>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: green;
`;
