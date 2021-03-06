import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import React, { useCallback, useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/native';
import { theme } from '../../../assets/theme';
import { HeaderText, DefaultButton } from '../../../components';
import { RouteNames } from '../../../routes/RouteNames';
import { actions } from '../../../state/actions';
import { selectors } from '../../../state/selectors';
import { IssuesState } from '../../../utils';

export const IssueRepoView = () => {
  const { navigate } = useNavigation();

  const dispatch = useDispatch();

  useFocusEffect(
    useCallback(() => {
      dispatch(actions.issues.setIssuesState(IssuesState.open));
      dispatch(actions.issues.clearIssuesHasNextandPrevPages());
    }, [dispatch]),
  );

  const defaultIssue = 'github-issue-tracker';
  // const defaultIssue = 'react-native-snap-carousel';

  const repoOwner = useSelector(selectors.repo.getRepoOwner);
  const issuesState = useSelector(selectors.issues.getIssuesState);
  const isLoading = useSelector(selectors.ui.getRepoIssuesOnSync);
  const issuesExist = useSelector(selectors.issues.getIssuesExist);

  useEffect(() => {
    if (issuesExist) {
      navigate(RouteNames.IssueScreen);
    }
  }, [issuesExist, navigate]);

  const onSubmit = (value: { repo: string }) => {
    dispatch(actions.repo.setRepoName(value.repo));
    dispatch(
      actions.issues.getRepoIssues({
        owner: repoOwner,
        repo: value.repo,
        state: issuesState,
      }),
    );
  };

  return (
    <Container>
      <HeaderText text={`Enter ${repoOwner} repo name`} />
      <Formik initialValues={{ repo: defaultIssue }} onSubmit={onSubmit}>
        {({ handleChange, handleSubmit, values }) => (
          <View>
            <InputContainer>
              <Input
                value={values.repo}
                onChangeText={handleChange('repo')}
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="Repo name"
              />
            </InputContainer>
            <ButtonWrapper>
              <DefaultButton
                onPress={handleSubmit}
                text="Submit"
                disabled={isLoading}
                isLoading={isLoading}
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
