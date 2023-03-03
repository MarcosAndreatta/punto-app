import { configureStore } from '@reduxjs/toolkit';
import informadorReducer from './slices/interfazGrafica/informador';
import navBarReducer from './slices/interfazGrafica/navBar';
export const store = configureStore({
  reducer: {
    navBar: navBarReducer,
    informador: informadorReducer
    // Read how to use an object made of reducers. Ej: reducer: {interfazGrafica: [navBar, foo]}
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;