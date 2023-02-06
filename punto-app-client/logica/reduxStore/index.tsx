import { configureStore } from '@reduxjs/toolkit';
import navBarReducer from './slices/interfazGrafica/navBar';
import backDropReducer from './slices/interfazGrafica/backDrop';
export const store = configureStore({
  reducer: {
    navBar: navBarReducer,
    backDrop: backDropReducer // Read how to use an object made of reducers. Ej: reducer: {interfazGrafica: [navBar, foo]}
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;