import { configureStore } from '@reduxjs/toolkit';
import coursesReducer from './slices/coursesSlice';
import uiReducer from './slices/uiSlice';

export const store = configureStore({
  reducer: {
    courses: coursesReducer,
    ui: uiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});

export default store;
