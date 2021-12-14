import { applyMiddleware, createStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './reducers';
import { rootSaga } from './sagas';

export const configStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const appliedMiddleware = applyMiddleware(sagaMiddleware);

  const store = createStore(rootReducer, appliedMiddleware);

  sagaMiddleware.run(rootSaga);
  return { store };
};
