import React, { FC } from 'react';
import styled from 'styled-components/native';
import { NavigateNextIcon } from '..';

export interface NextButtonProps {
  onPress?: () => void;
  disabled?: boolean;
}

export const NextButton: FC<NextButtonProps> = ({
  onPress,
  disabled = false,
}) => {
  return (
    <Container onPress={onPress} disabled={disabled}>
      <NavigateNextIcon />
    </Container>
  );
};

type ContainerProps = {
  disabled: boolean;
};

const Container = styled.TouchableOpacity<ContainerProps>`
  align-items: center;
  border-radius: 12px;
  justify-content: center;
  padding: 10px;
`;
