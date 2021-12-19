import React from 'react';

import styled from 'styled-components/native';
import { Issue } from '../../types';
import { formatDistance } from 'date-fns';
import { IssueListItemImage } from './issueListItemIcon';
import { theme } from '../../assets/theme';

export const IssuesListItem = ({ issue }: { issue: Issue }) => {
  const { title, number, user, pull_request, created_at, state, draft } = issue;

  const { login: userLogin } = user;

  const issueCreatedAt = created_at || new Date();

  const dateDistance = formatDistance(new Date(issueCreatedAt), new Date(), {
    addSuffix: true,
  });

  return (
    <Container>
      <IconWrapper>
        <IssueListItemImage
          state={state}
          pull_request={pull_request}
          draft={draft}
        />
      </IconWrapper>
      <InfoWrapper>
        <HeaderWeapper>
          <HeaderText numberOfLines={1}>{title}</HeaderText>
        </HeaderWeapper>
        <BodyWrapper>
          <BodyText>{`#${number} opened ${dateDistance} by ${userLogin}`}</BodyText>
        </BodyWrapper>
      </InfoWrapper>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  border-color: ${theme.colors.white};
  border-bottom-width: 1px;
  min-height: 40px;
  padding: 10px;
`;

const HeaderWeapper = styled.View`
  flex-direction: row;
  margin-bottom: 5px;
`;

const HeaderText = styled.Text`
  color: ${theme.colors.white};
  font-weight: bold;
`;

const BodyWrapper = styled.View`
  flex-direction: row;
`;

const BodyText = styled.Text`
  color: ${theme.colors.lightGrey};
`;

const IconWrapper = styled.View`
  margin-right: 10px;
`;

const InfoWrapper = styled.View`
  flex: 1;
`;
