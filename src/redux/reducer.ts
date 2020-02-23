import { ActionTypes } from "./action-types";
import { javascriptTypes } from "../utils/guesser";

interface arg {
  value: any;
  type: string;
}

const INTIAL_STATE = {
  args: [{ value: "value", type: javascriptTypes.string }],
  expectedOutput: { type: javascriptTypes.string, value: "Expected Output" },
  guess: [] as any[]
};

export const reducer = (
  state = INTIAL_STATE,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case ActionTypes.SET_ARGS:
      return {
        ...state,
        args: action.payload
      };
    case ActionTypes.SET_EXPECTED_OUTPUT:
      return {
        ...state,
        expectedOutput: action.payload
      };
    case ActionTypes.SET_GUESS:
      return {
        ...state,
        guess: action.payload
      };
    case ActionTypes.ADD_ARGUMENT:
      return {
        ...state,
        args: [...state.args, { value: "value", type: javascriptTypes.string }]
      };
    case ActionTypes.REMOVE_ARGUMENT:
      return {
        ...state,
        args: state.args.slice(0, state.args.length - 1)
      };
    default:
      return state;
  }
};
