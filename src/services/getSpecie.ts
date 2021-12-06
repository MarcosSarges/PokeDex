import Api from '@configs/Api';

interface Egg {
  name: string;
  url: string;
}

export interface ISpace {
  egg_groups: Egg[];
}

const getSpecie = async (name?: string): Promise<ISpace> => {
  const { data } = await Api.get<ISpace>(`/pokemon-species/${name}`);
  return data;
};

export default getSpecie;
