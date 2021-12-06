const getIdPokemon = (id: number) => {
  if (!id) {
    return '';
  }
  const idString = id.toString();
  const missToFive = 5 - idString.length;
  const zerosCompleteId = Array(missToFive).fill('0').join('');
  return `${zerosCompleteId}${idString}`;
};

export default getIdPokemon;
