const COEFFICIENT_METERS = 0.1;

const parserDecimetersToMeters = (height: number) => {
  return (COEFFICIENT_METERS * height).toFixed(2);
};

export default parserDecimetersToMeters;
