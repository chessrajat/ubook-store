import { combineReducers } from "redux";
import AsyncReducer from "./AsyncReducer";
import BookReducer from "./BookReducer";

const rootReducer = combineReducers({
  books: BookReducer,
  async: AsyncReducer,
});

export default rootReducer;
