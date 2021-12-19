import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import React from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/native';
import { theme } from '../../../assets/theme';
import { HeaderText, DefaultButton } from '../../../components';
import { RouteNames } from '../../../routes/RouteNames';
import { actions } from '../../../state/actions';

export const IssueOwnerView = () => {
  const { navigate } = useNavigation();

  const dispatch = useDispatch();

  const defaultOwner = 'Lenovis';
  // const defaultOwner = 'meliorence';

  const onSubmit = (value: { owner: string }) => {
    dispatch(actions.repo.setRepoOwner(value.owner));
    navigate(RouteNames.RepoScreen);
  };

  return (
    <Container>
      <HeaderText text="Enter repo owner name" />
      <Formik initialValues={{ owner: defaultOwner }} onSubmit={onSubmit}>
        {({ handleChange, handleSubmit, values }) => (
          <View>
            <InputContainer>
              <Input
                value={values.owner}
                onChangeText={handleChange('owner')}
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="Repo owner"
              />
            </InputContainer>
            <ButtonWrapper>
              <DefaultButton
                onPress={handleSubmit}
                text="Submit"
                disabled={values.owner ? false : true}
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
  background-color: ${theme.colors.backgroundColor};
  padding: 16px;
`;

const Input = styled.TextInput`
  flex: 1;
  min-height: 50px;
  font-size: 16px;
`;

const InputContainer = styled.View`
  background-color: ${theme.colors.borderColor};
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
