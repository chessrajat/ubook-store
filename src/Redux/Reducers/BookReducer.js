import { SELECT_BOOK, SET_BOOKS } from "../../Utils/Constants";
import { createReducer } from "../../Utils/CreateReducer";

const initialState = {
  loading: true,
  books: [],
  selectedBook: {},
};

const setBooks = (state = initialState, payload) => {
  return { ...state, loading: false, books: payload };
};

const selectBook = (state = initialState, payload) => {
  return { ...state, selectBook: payload };
};

export default createReducer(initialState, {
  [SET_BOOKS]: setBooks,
  [SELECT_BOOK]: selectBook,
});
