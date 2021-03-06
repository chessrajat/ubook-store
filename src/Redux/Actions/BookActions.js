import axios from "axios";
import { BASE_API, SELECT_BOOK, SET_BOOKS } from "../../Utils/Constants";

export const getLatest = () => {
  return async (dispatch) => {
    const endpoint = `${BASE_API}volumes?q=+inauthor:&orderBy=newest&maxResults=20`;
    try {
      const res = await axios.get(endpoint);
      console.log(res);
      dispatch({
        type: SET_BOOKS,
        payload: res.data.items,
      });
    } catch (err) {
      console.error(err);
    }
  };
};

export const search = (uri) => {
  return async (dispatch) => {
    const endpoint = `${BASE_API}${uri}&maxResults=20`;
    try {
      const res = await axios.get(endpoint);
      console.log(res.data);
      dispatch({
        type: SET_BOOKS,
        payload: res.data.items,
      });
    } catch (err) {
      console.err(err);
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
