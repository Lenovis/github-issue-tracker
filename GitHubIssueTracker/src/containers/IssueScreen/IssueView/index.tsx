import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/native';
import { theme } from '../../../assets/theme';
import {
  CheckCircleIcon,
  DotCircleIcon,
  FilterButton,
  HeaderText,
  IssueList,
} from '../../../components';
import { actions } from '../../../state/actions';
import { selectors } from '../../../state/selectors';
import { IssuesState } from '../../../utils';

export const IssueView = () => {
  const dispatch = useDispatch();

  const repo = useSelector(selectors.repo.getRepoName);
  const issues = useSelector(selectors.issues.getRepoIssues);
  const issueState = useSelector(selectors.issues.getIssuesState);
  const gettingData = useSelector(selectors.ui.getRepoIssuesOnSync);

  const handleOpenPress = () => {
    dispatch(actions.issues.setIssuesState(IssuesState.open));
  };

  const handleClosedPress = () => {
    dispatch(actions.issues.setIssuesState(IssuesState.closed));
  };

  const handleIssuesClean = () => {
    dispatch(actions.issues.clearRepoIssues());
    dispatch(actions.repo.clearRepoName());
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => handleIssuesClean, []);

  const isSelected = (value: IssuesState) => {
    if (value === issueState) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      <Container>
        <HeaderTextWrapper>
          <HeaderText text={`${repo} issues`} numberOfLines={2} />
        </HeaderTextWrapper>
        <FilterContainer>
          <FilterButton
            text="Open"
            icon={DotCircleIcon({
              color: isSelected(IssuesState.open)
                ? theme.colors.white
                : theme.colors.grey,
            })}
            onPress={handleOpenPress}
            disabled={gettingData}
            selected={isSelected(IssuesState.open)}
          />
          <FilterButton
            text="Closed"
            icon={CheckCircleIcon({
              color: isSelected(IssuesState.closed)
                ? theme.colors.white
                : theme.colors.grey,
            })}
            onPress={handleClosedPress}
            disabled={gettingData}
            selected={isSelected(IssuesState.closed)}
          />
        </FilterContainer>
        {IssueList(issues)}
      </Container>
    </>
  );
};

const Container = styled.ScrollView`
  background-color: ${theme.colors.backgroundColor};
`;

const FilterContainer = styled.View`
  flex-direction: row;
  background-color: ${theme.colors.blueGrey};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const HeaderTextWrapper = styled.View`
  margin: 0px 10px;
`;
