import React from 'react';

import styled from 'styled-components/native';
import { Issue } from '../../types';

export const IssuesListItem = ({ issue }: { issue: Issue }) => {
  const { title, number, user } = issue;

  const { login: userLogin } = user;

  return (
    <Container>
      <HeaderWeapper>
        <HeaderText numberOfLines={1}>{title}</HeaderText>
      </HeaderWeapper>
      <BodyWrapper>
        <BodyText>{`#${number} opened n days ago by ${userLogin}`}</BodyText>
      </BodyWrapper>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: column;
  border-color: ${({ theme }) => theme.colors.white};
  border-bottom-width: 1px;
  min-height: 40px;
`;

const HeaderWeapper = styled.View`
  flex-direction: row;
`;

const HeaderText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
`;

const BodyWrapper = styled.View`
  flex-direction: row;
`;

const BodyText = styled.Text`
  color: ${({ theme }) => theme.colors.lightGrey};
`;
