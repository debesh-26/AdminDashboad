import { configureStore } from '@reduxjs/toolkit';
import inventoryReducer from './inventorySlice';

export default configureStore({
  reducer: {
    inventory: inventoryReducer,
  },
});
