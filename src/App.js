import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Header, Segment, Sidebar } from "semantic-ui-react";
import "./App.css";
import BooksGrid from "./Components/BooksGrid";
import SearchBar from "./Components/SearchBar";
import SideNav from "./Components/SideNav";
import { getBook, search } from "./Redux/Actions/BookActions";

function App() {
  const dispatch = useDispatch();

  return (
    <>
      <Sidebar.Pushable as={Segment} className="full-height">
        <SideNav />
        <Sidebar.Pusher className="full-height">
          <Segment basic>
            <SearchBar />
            <BooksGrid />
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </>
  );
}

export default App;
