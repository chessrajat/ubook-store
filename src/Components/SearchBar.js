import React from "react";
import { Button, Icon, Input, Select } from "semantic-ui-react";

const SearchBar = () => {
  const options = [
    { key: "inauthor", text: "In Author", value: "inauthor" },
    { key: "intitle", text: "In Titles", value: "intitle" },
  ];
  return (
    <div className="search-container">
      <Input type="text">
        <input />
        <Select compact options={options} defaultValue="intitle" />
        <Button type="submit">
          <Icon name="search" />
        </Button>
      </Input>
    </div>
  );
};

export default SearchBar;
