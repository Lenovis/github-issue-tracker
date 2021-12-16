import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import styled from 'styled-components/native';
import { actions } from '../../state/actions';

export const ToastMessage = ({
  infoText = null,
  closeAfter = 4000,
  show = false,
}: {
  infoText: string | null;
  closeAfter?: number;
  show: boolean;
}) => {
  const dispatch = useDispatch();
  const [showToast, setShowToast] = useState(show);

  useEffect(() => {
    if (show) {
      setShowToast(true);
    }
  }, [show]);

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        setShowToast(false);
        dispatch(actions.messages.clearInfoMessage());
      }, closeAfter);
    }
  }, [show, closeAfter, setShowToast, dispatch]);

  return showToast ? (
    <Container>
      <ToastWrapper>
        <InfoMessageText>{infoText}</InfoMessageText>
      </ToastWrapper>
    </Container>
  ) : null;
};

const InfoMessageText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  padding: 0px 10px;
  text-align: center;
`;

const ToastWrapper = styled.View`
  align-self: center;
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 100px;
  justify-content: center;
  min-height: 32px;
  padding: 5px 12px;
`;

const Container = styled.View`
  position: absolute;
  bottom: 100px;
  min-height: 32px;
  left: 0px;
  right: 0px;
`;
