import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Form, Icon, Input, Select } from "semantic-ui-react";
import { getBook, getLatest, search } from "../Redux/Actions/BookActions";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");

  const dispatch = useDispatch();
  const searchSubmit = () => {
    const uri = `volumes?q=${searchText}`;
    dispatch(search(uri));
  };

  return (
    <div className="search-container">
      <Form onSubmit={searchSubmit}>
        <Input fluid>
          <input
            required
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          <Button type="submit">
            <Icon name="search" />
          </Button>
        </Input>
      </Form>
    </div>
  );
};

export default SearchBar;
