import {
  ASYNC_ACTION_ERROR,
  ASYNC_ACTION_FINISH,
  ASYNC_ACTION_START,
} from "../../Utils/Constants";
import { createReducer } from "../../Utils/CreateReducer";

const initialState = {
  loading: true,
};

const asyncActionStarted = (state, payload) => {
  return { ...state, loading: true };
};

const asyncActionFinished = (state) => {
  return { ...state, loading: false };
};

const asyncActionError = (state) => {
  return { ...state, loading: false };
};

export default createReducer(initialState, {
  [ASYNC_ACTION_START]: asyncActionStarted,
  [ASYNC_ACTION_FINISH]: asyncActionFinished,
  [ASYNC_ACTION_ERROR]: asyncActionError,
});
