import {
  ASYNC_ACTION_ERROR,
  ASYNC_ACTION_FINISH,
  ASYNC_ACTION_START,
} from "../../Utils/Constants";

export const asyncActionStart = () => {
  return {
    type: ASYNC_ACTION_START,
  };
};

export const asyncActionFinish = () => {
  return {
    type: ASYNC_ACTION_FINISH,
  };
};

export const asyncActionError = () => {
  return {
    type: ASYNC_ACTION_ERROR,
  };
};
