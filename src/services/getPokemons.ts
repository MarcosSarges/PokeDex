import Api from '@configs/Api';

const LIMIT = 10;

export interface IRefPokemon {
  name: string;
  url: string;
}

export interface IListPokemon {
  count: number;
  next: string | null;
  previous: string | null;
  results: IRefPokemon[];
}

const getPokemons = async (offset: number = 0): Promise<IListPokemon> => {
  const { data } = await Api.get<IListPokemon>(
    `/pokemon?limit=${LIMIT}&offset=${offset}`,
  );
  return data;
};

export default getPokemons;
