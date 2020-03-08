import { ActionTypes } from "./action-types";

export const setArgs = (newArgs: any[]) => ({
  type: ActionTypes.SET_ARGS,
  payload: newArgs
});

export const setExpectedOutput = (newExpectedOutput: any) => ({
  type: ActionTypes.SET_EXPECTED_OUTPUT,
  payload: newExpectedOutput
});

export const setGuess = (guess: any[]) => ({
  type: ActionTypes.SET_GUESS,
  payload: guess
});

export const addArgument = () => ({
  type: ActionTypes.ADD_ARGUMENT
});

export const removeArgument = () => ({
  type: ActionTypes.REMOVE_ARGUMENT
});

export const confirmJsonAlert = () => ({
  type: ActionTypes.CONFIRM_JSON_ALERT
});
