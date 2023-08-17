import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './CountSlice';
import commentReducer from './CommentSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    comment: commentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
