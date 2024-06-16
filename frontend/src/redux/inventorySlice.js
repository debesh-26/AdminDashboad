import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchInventory = createAsyncThunk('inventory/fetchInventory', async (filters) => {
  const response = await axios.get('http://localhost:5000/api/inventory', { params: filters });
  return response.data;
  
});

const inventorySlice = createSlice({
  name: 'inventory',
  initialState: {
    items: [],
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchInventory.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchInventory.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchInventory.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default inventorySlice.reducer;
