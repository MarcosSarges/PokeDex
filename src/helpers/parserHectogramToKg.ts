const COEFFICIENT_KG = 0.1;

const parserHectogramToKg = (wight: number) => {
  return (COEFFICIENT_KG * wight).toFixed(2);
};

export default parserHectogramToKg;
