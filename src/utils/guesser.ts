import * as R from "ramda";

export const javascriptTypes = {
  string: "string",
  number: "number",
  boolean: "boolean",
  object: "object",
  function: "function",
  array: "array"
};

export const ramdaTester = (args: any[], expectedOutput: any): any[] => {
  const possibleGuesses: any[] = [];

  for (const method in R) {
    try {
      let result = (R as any)[method](...args);
      // eslint-disable-next-line
      if (R.equals(result, expectedOutput) || result == expectedOutput) {
        possibleGuesses.push(method);
      }
    } catch (error) {}
  }

  return possibleGuesses;
};
