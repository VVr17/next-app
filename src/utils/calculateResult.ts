/**
 * Calculates a result based on the input value.
 *
 * @param value The input number to calculate with.
 * @returns The result of 100 divided by the remainder of the input value divided by 4, rounded to 2 decimal places.
 */
export const calculateResult = (value: number) => {
  return (100 / (value % 4)).toFixed(2);
};
