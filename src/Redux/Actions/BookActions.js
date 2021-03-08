import axios from "axios";
import { BASE_API, SELECT_BOOK, SET_BOOKS } from "../../Utils/Constants";
import {
  asyncActionError,
  asyncActionFinish,
  asyncActionStart,
} from "./AsyncActions";

export const getLatest = () => {
  return async (dispatch) => {
    dispatch(asyncActionStart());
    const endpoint = `${BASE_API}volumes?q=+inauthor:&orderBy=newest&maxResults=24`;
    try {
      const res = await axios.get(endpoint);
      dispatch({
        type: SET_BOOKS,
        payload: res.data.items,
      });
      dispatch(asyncActionFinish());
    } catch (err) {
      console.error(err);
      dispatch(asyncActionError());
    }
  };
};

export const search = (uri) => {
  return async (dispatch) => {
    dispatch(asyncActionStart());
    const endpoint = `${BASE_API}${uri}&maxResults=24`;
    try {
      const res = await axios.get(endpoint);
      console.log(res.data);
      dispatch({
        type: SET_BOOKS,
        payload: res.data.items,
      });
      dispatch(asyncActionFinish());
    } catch (err) {
      console.error(err);
      dispatch(asyncActionError());
    }
  };
};

export const getBook = (bookID) => {
  return async (dispatch) => {
    const endpoint = `${BASE_API}volumes/${bookID}`;
    try {
      const res = await axios.get(endpoint);
      console.log(res.data);
      dispatch({
        type: SELECT_BOOK,
        payload: res.data,
      });
    } catch (err) {
      console.error(err);
    }
  };
};
