import React, { FC } from 'react';
import styled from 'styled-components/native';
import { NavigateBackIcon } from '..';

export interface BackButtonProps {
  onPress?: () => void;
  disabled?: boolean;
}

export const BackButton: FC<BackButtonProps> = ({
  onPress,
  disabled = false,
}) => {
  return (
    <Container onPress={onPress} disabled={disabled}>
      <NavigateBackIcon />
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
