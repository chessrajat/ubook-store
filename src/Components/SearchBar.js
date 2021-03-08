import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Form, Icon, Input, Select } from "semantic-ui-react";
import { getBook, getLatest, search } from "../Redux/Actions/BookActions";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [s_options, sets_options] = useState("");

  const dispatch = useDispatch();
  const searchSubmit = () => {
    const uri = `volumes?q=${searchText}`;
    dispatch(search(uri));
  };
  console.log(s_options);

  const options = [
    { key: "inauthor", text: "In Author", value: "inauthor" },
    { key: "intitle", text: "In Titles", value: "intitle" },
  ];
  return (
    <div className="search-container">
      <Form onSubmit={searchSubmit}>
        <Input fluid>
          <input
            required
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          {/* <Select
          onChange={(e) => sets_options(e)}
          compact
          options={options}
          defaultValue="intitle"
        /> */}

          <Button type="submit">
            <Icon name="search" />
          </Button>
        </Input>
      </Form>
    </div>
  );
};

export default SearchBar;
