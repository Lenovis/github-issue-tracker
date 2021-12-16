import React, { FC } from 'react';
import { connect } from 'react-redux';

import { ToastMessage } from '..';
import { actions } from '../../state/actions';
import { RootState } from '../../state/reducers';
import { selectors } from '../../state/selectors';

type GlobalInfoProps = {
  message: string | null;
};

const GlobalInfo: FC<GlobalInfoProps> = ({ message }) => (
  <ToastMessage show={!!message} infoText={message} />
);

const mapStateToProps = (state: RootState) => ({
  message: selectors.messages.getInfoMessage(state),
});

const mapDispatchToProps = {
  setInfoMessage: actions.messages.setInfoMessage,
};

export const GlobalInfoMessage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(GlobalInfo);
