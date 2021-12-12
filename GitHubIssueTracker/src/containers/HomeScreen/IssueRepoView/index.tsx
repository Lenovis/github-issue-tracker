import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { RouteNames } from '../../../routes/RouteNames';

export const IssueRepoView = () => {
  const { navigate } = useNavigation();

  return (
    <Container>
      <Text>Issue Repo screen</Text>
      <TouchableOpacity onPress={() => navigate(RouteNames.IssueScreen)}>
        <Text>Next page</Text>
      </TouchableOpacity>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;
