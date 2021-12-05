import Api from '@configs/Api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface IFetchListPokemons {}

export const fetchListPokemons = createAsyncThunk(
  'getListPokemons',
  async (_, thunkApi) => {
    const { offset, limit } = thunkApi.getState().listPokemons;
    const response = await Api.get(`/pokemon?limit=${limit}&offset=${offset}`);
    return response.data;
  },
);

const listPokemonsSlice = createSlice({
  name: 'listPokemons',
  initialState: { pokemons: [], loading: 'idle', offset: 0, limit: 10 },
  reducers: {
    nextPagePokemons: state => {
      state.offset += 10;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchListPokemons.pending, state => {
      state.loading = 'loading';
    });
    builder.addCase(fetchListPokemons.rejected, state => {
      state.loading = 'idle';
    });
    builder.addCase(fetchListPokemons.fulfilled, (state, action) => {
      const newState = { ...state };
      newState.loading = 'idle';
      return newState;
    });
  },
});

export const { nextPagePokemons } = listPokemonsSlice.actions;
export default listPokemonsSlice.reducer;
