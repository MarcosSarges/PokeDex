import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getPokemons, { IRefPokemon } from '@services/getPokemons';
import unionby from 'lodash.unionby';
interface IListPokemonSlice {
  pokemons: IRefPokemon[];
  loading: 'loading' | 'idle';
  offset: number;
}

export const fetchListPokemons = createAsyncThunk(
  'getListPokemons',
  async (_, thunkApi) => {
    // @ts-ignore
    const { offset } = thunkApi.getState().listPokemons;
    const response = await getPokemons(offset);
    return response;
  },
);

const INITIAL_STATE: IListPokemonSlice = {
  pokemons: [],
  loading: 'idle',
  offset: 0,
};

const listPokemonsSlice = createSlice({
  name: 'listPokemons',
  initialState: INITIAL_STATE,
  reducers: {
    nextPage: state => {
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
      state.loading = 'idle';
      state.pokemons = unionby(state.pokemons, action.payload.results, 'name');
    });
  },
});

export const { nextPage } = listPokemonsSlice.actions;

export default listPokemonsSlice.reducer;
