import * as R from "ramda";

export const javascriptTypes = {
  string: "string",
  number: "number",
  boolean: "boolean",
  object: "object",
  function: "function",
  array: "array"
};

const parseNumber = (value: string) => Number(value);

const parseBoolean = (value: string) => {
  if (value === "false") return false;
  if (value === "true") return true;
  return !!value;
};

// eslint-disable-next-line
const parseFunction = (value: string) => eval(value);

const parseObject = (value: string) => JSON.parse(value);

const parseArray = (value: string) => JSON.parse(value);

export const parseArg = (arg: { value: string; type: string }): any => {
  try {
    switch (arg.type) {
      case javascriptTypes.string:
        return arg.value;
      case javascriptTypes.number:
        return parseNumber(arg.value);
      case javascriptTypes.boolean:
        return parseBoolean(arg.value.toLowerCase());
      case javascriptTypes.object:
        return parseObject(arg.value);
      case javascriptTypes.function:
        // eslint-disable-next-line
        return parseFunction(arg.value);
      case javascriptTypes.array:
        return parseArray(arg.value);
    }
  } catch (error) {}
};

export const ramdaTester = (args: any[], expectedOutput: any): any[] => {
  const possibleGuesses: any[] = [];

  const newArr = args.map(parseArg);
  let newExpectedOutput = parseArg(expectedOutput);

  for (const method in R) {
    if (method === "unfold") {
      /**
       * !: skipping unfold for now due to memory allocation error when
       * !: looking for a different method. The offending arguments
       * !: are R.unfold(x => [x], [1, 2])
       */
    } else {
      try {
        let result = (R as any)[method](...newArr);
        // eslint-disable-next-line
        if (R.equals(result, newExpectedOutput)) {
          possibleGuesses.push(method);
        }
      } catch (error) {}
    }
  }

  return possibleGuesses;
};
