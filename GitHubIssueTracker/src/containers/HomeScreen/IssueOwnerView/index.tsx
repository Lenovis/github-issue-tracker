import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';

export const IssueOwnerView = () => {
  return (
    <Container>
      <Text>Issue owner screen</Text>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: red;
`;
