import { combineReducers } from '@reduxjs/toolkit';
import listPokemons from './features/listPokemons';
const rootReducer = combineReducers({
  listPokemons: listPokemons,
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
