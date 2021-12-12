import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { HeaderText, DefaultButton } from '../../../components';
import { RouteNames } from '../../../routes/RouteNames';

export const IssueRepoView = () => {
  const { navigate } = useNavigation();

  return (
    <Container>
      <HeaderText text="Enter repo name" />
      <Formik
        initialValues={{ repo: '' }}
        onSubmit={value => {
          console.log(value);
          navigate(RouteNames.IssueScreen);
        }}
      >
        {({ handleChange, handleSubmit, values }) => (
          <View>
            <InputContainer>
              <Input value={values.repo} onChangeText={handleChange('repo')} />
            </InputContainer>
            <ButtonWrapper>
              <DefaultButton
                onPress={handleSubmit}
                text="Submit"
                disabled={values.repo ? false : true}
              />
            </ButtonWrapper>
          </View>
        )}
      </Formik>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  padding: 16px;
`;

const Input = styled.TextInput`
  flex: 1;
  min-height: 50px;
  font-size: 16px;
`;

const InputContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.borderColor};
  border-radius: 12px;
  border-width: 1px;
  flex-direction: row;
  padding-left: 14px;
  padding-right: 14px;
  min-height: 52px;
`;

const ButtonWrapper = styled.View`
  margin: 20px 0px;
`;
