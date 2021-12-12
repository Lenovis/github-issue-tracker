import React from 'react';
import styled from 'styled-components/native';

export const HeaderText = ({ text }: { text: String }) => (
  <HeaderWrapper>
    <HeaderStyledText>{text}</HeaderStyledText>
  </HeaderWrapper>
);

const HeaderStyledText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  font-weight: bold;
  font-size: 20px;
`;

const HeaderWrapper = styled.View`
  margin: 40px 0px;
`;
