import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';

import appReducer from './slices/appSlice';
import waitFetchRouteSelection from './sagas';

const sagaMiddleware = createSagaMiddleware();

export type RootState = ReturnType<typeof store.getState>;
export const store = configureStore({
  reducer: {
    main: appReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(waitFetchRouteSelection);
