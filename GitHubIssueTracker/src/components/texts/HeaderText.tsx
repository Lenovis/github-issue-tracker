import React from 'react';
import styled from 'styled-components/native';
import { theme } from '../../assets/theme';

export const HeaderText = ({
  text,
  numberOfLines = 1,
}: {
  text: String;
  numberOfLines?: number;
}) => (
  <HeaderWrapper>
    <HeaderStyledText numberOfLines={numberOfLines}>{text}</HeaderStyledText>
  </HeaderWrapper>
);

const HeaderStyledText = styled.Text`
  color: ${theme.colors.white};
  text-align: center;
  font-weight: bold;
  font-size: 20px;
`;

const HeaderWrapper = styled.View`
  margin: 40px 0px;
`;
