import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

export const IssueView = () => {
  return (
    <Container>
      <Text>Issue screen</Text>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;
