// BEGIN
const sum = (numbers) => numbers.reduce((acc, number) => acc + number, 0);

const magic = (...numbers) => {
  const currentSum = sum(numbers);

  const inner = (...nextNumbers) => magic(currentSum, ...nextNumbers);
  inner.valueOf = () => currentSum;

  return inner;
};

export default magic;
// END
