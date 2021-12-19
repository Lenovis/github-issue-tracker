import React, { FC } from 'react';
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';
import { theme } from '../../assets/theme';

export const ButtonContent = ({
  isLoading,
  disabled,
  text,
}: {
  isLoading: boolean;
  disabled: boolean;
  text: string;
}) => {
  if (isLoading) {
    return <ActivityIndicator />;
  }
  return <ButtonText disabled={disabled}>{text}</ButtonText>;
};
export interface DefaultButtonProps {
  onPress?: () => void;
  text?: string;
  disabled?: boolean;
  isLoading?: boolean;
}

export const DefaultButton: FC<DefaultButtonProps> = ({
  onPress,
  text = '',
  disabled = false,
  isLoading = false,
}) => {
  return (
    <Container onPress={onPress} disabled={disabled}>
      <ButtonContent isLoading={isLoading} disabled={disabled} text={text} />
    </Container>
  );
};

type ButtonTextProps = {
  disabled: boolean;
};

export const ButtonText = styled.Text<ButtonTextProps>`
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  color: ${theme.colors.white};
  font-weight: bold;
`;

type ContainerProps = {
  disabled: boolean;
};

const Container = styled.TouchableOpacity<ContainerProps>`
  align-items: center;
  background-color: ${theme.colors.buttonGreen};
  border-radius: 12px;
  height: 46px;
  justify-content: center;
  padding-left: 16px;
  padding-right: 16px;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;
