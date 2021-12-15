import React from 'react';
import styled from 'styled-components/native';

export const FilterButton = ({
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
