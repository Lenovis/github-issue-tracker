import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/native';
import { theme as importedTheme } from '../../../assets/theme';
import {
  CheckCircleIcon,
  DotCircleIcon,
  HeaderText,
  IssuesListItem,
} from '../../../components';
import { actions } from '../../../state/actions';
import { selectors } from '../../../state/selectors';
import { Issue } from '../../../types';
import { IssuesState } from '../../../utils';

const FilterButton = ({
  text,
  icon,
  count = 0,
  onPress,
  disabled = false,
  selected = false,
}: {
  text: string;
  icon?: JSX.Element;
  count?: number;
  onPress?: () => void;
  disabled?: boolean;
  selected?: boolean;
}) => {
  return (
    <FilterButtonWrapper onPress={onPress} disabled={disabled}>
      <ButtonIconWrapper>{icon ? icon : null}</ButtonIconWrapper>
      <StyledButtonText selected={selected}>{text}</StyledButtonText>
      <StyledButtonText selected={selected}>
        {' '}
        {count ? count : null}
      </StyledButtonText>
    </FilterButtonWrapper>
  );
};

const IssueList = (issues: Issue[]) => {
  const gettingData = useSelector(selectors.ui.getRepoIssuesOnSync);
  if (gettingData) {
    return <HeaderText text="...Loading..." />;
  }
  return issues.map((issue, index) => (
    <IssuesListItem issue={issue} key={index} />
  ));
};

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

  const isSelected = (value: IssuesState) => {
    if (value === issueState) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Container>
      <HeaderTextWrapper>
        <HeaderText text={`${repo} issues`} numberOfLines={2} />
      </HeaderTextWrapper>
      <FilterContainer>
        <FilterButton
          text="Open"
          icon={DotCircleIcon({
            color: isSelected(IssuesState.open)
              ? importedTheme.colors.white
              : importedTheme.colors.grey,
          })}
          onPress={handleOpenPress}
          disabled={gettingData}
          selected={isSelected(IssuesState.open)}
        />
        <FilterButton
          text="Closed"
          icon={CheckCircleIcon({
            color: isSelected(IssuesState.closed)
              ? importedTheme.colors.white
              : importedTheme.colors.grey,
          })}
          onPress={handleClosedPress}
          disabled={gettingData}
          selected={isSelected(IssuesState.closed)}
        />
      </FilterContainer>

      {IssueList(issues)}
    </Container>
  );
};

const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
`;

const FilterContainer = styled.View`
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.blueGrey};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const FilterButtonWrapper = styled.TouchableOpacity`
  margin: 5px;
  flex-direction: row;
  align-items: center;
`;

const ButtonIconWrapper = styled.View`
  margin: 5px;
`;

type StyledButtonTextProps = {
  selected: boolean;
};

const StyledButtonText = styled.Text<StyledButtonTextProps>`
  color: ${({ theme, selected }) =>
    selected ? theme.colors.white : theme.colors.grey};
  font-weight: bold;
`;

const HeaderTextWrapper = styled.View`
  margin: 0px 10px;
`;
