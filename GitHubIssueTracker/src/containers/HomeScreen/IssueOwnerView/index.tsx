import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import {RouteNames} from '../../../routes/RouteNames';

export const IssueOwnerView = () => {
  const {navigate} = useNavigation();

  return (
    <Container>
      <Text>Issue owner screen</Text>
      <TouchableOpacity onPress={() => navigate(RouteNames.Repo)}>
        <Text>Next page</Text>
      </TouchableOpacity>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: red;
`;
