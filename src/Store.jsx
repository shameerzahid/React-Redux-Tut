import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/index';

const store = configureStore({
  reducer: rootReducer// Use your root reducer here
  // ... other store configurations if needed
});

export default store;
