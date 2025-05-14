import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { Starship } from '../../domain/models/Starships';
import { fetchStarships } from '../../data/starships/starshipsRepository';

interface StarshipsState {
  items: Starship[];
  nextPage: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: StarshipsState = {
  items: [],
  nextPage: null,
  loading: false,
  error: null,
};

export const fetchStarshipsAsync = createAsyncThunk(
  'starships/fetchStarships',
  async (url?: string) => {
    const response = await fetchStarships(url);
    return response;
  }
);

const starshipsSlice = createSlice({
  name: 'starships',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStarshipsAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStarshipsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.items = [...state.items, ...action.payload.results];
        state.nextPage = action.payload.next;
      })
      .addCase(fetchStarshipsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch starships';
      });
  },
});

export default starshipsSlice.reducer; 