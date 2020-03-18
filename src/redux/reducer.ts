import { ActionTypes } from "./action-types";
import { javascriptTypes } from "../utils/guesser";

export interface IArg {
  value: any;
  type: string;
  id: number;
}

const INTIAL_STATE = {
  args: [{ value: "value", type: javascriptTypes.string, id: 0 }],
  expectedOutput: {
    type: javascriptTypes.string,
    value: "Expected Output",
    id: 0
  },
  guess: [] as any[],
  nextId: 1
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
        args: [
          ...state.args,
          { value: "value", type: javascriptTypes.string, id: state.nextId }
        ],
        nextId: state.nextId += 1
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
