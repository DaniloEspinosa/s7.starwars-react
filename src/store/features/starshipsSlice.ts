import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { StarshipI } from '../../models/StarshipsI';
import { fetchStarships } from '../../data/starships/starshipsRepository';

interface StarshipsState {
  items: StarshipI[];
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
        const existingUrls = new Set(state.items.map(item => item.url));
        const newItems = action.payload.results.filter(
          (item: StarshipI) => !existingUrls.has(item.url)
        );
        state.items = [...state.items, ...newItems];
        state.nextPage = action.payload.next;
      })
      .addCase(fetchStarshipsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch starships';
      });
  },
});

export default starshipsSlice.reducer; 