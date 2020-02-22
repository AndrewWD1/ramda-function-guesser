import * as R from "ramda";

export const ramdaTester = (args: any[], expectedOutput: any): any[] => {
  const possibleGuesses: any[] = [];

  for (const method in R) {
    try {
      let result = (R as any)[method](...args);
      if (R.equals(result, expectedOutput) || result == expectedOutput) {
        possibleGuesses.push(method);
      }
    } catch (error) {}
  }

  return possibleGuesses;
};
