import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { getBook, search } from "./Redux/Actions/BookActions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("here");
    const text = "harry";
    const uri = `volumes?q=${text}`;
    dispatch(search(uri));
  }, []);
  return <div>hello</div>;
}

export default App;
