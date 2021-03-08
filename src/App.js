import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dimmer, Header, Loader, Segment, Sidebar } from "semantic-ui-react";
import "./App.css";
import BooksGrid from "./Components/BooksGrid";
import SearchBar from "./Components/SearchBar";
import SideNav from "./Components/SideNav";
import { getBook, getLatest, search } from "./Redux/Actions/BookActions";

function App() {
  const booksObj = useSelector((state) => state.books);
  const loading = useSelector((state) => state.async.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLatest());
  }, []);

  return (
    <>
      <Sidebar.Pushable as={Segment} className="full-height app">
        <SideNav />
        <Sidebar.Pusher className="full-height">
          <Segment basic>
            <Dimmer active={loading} className="content_segment">
              <Loader>Hang a sec!!</Loader>
            </Dimmer>
            <SearchBar />
            {!loading && <BooksGrid books={booksObj.books} />}
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </>
  );
}

export default App;
