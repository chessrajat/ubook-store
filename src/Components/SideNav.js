import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Menu, Sidebar } from "semantic-ui-react";
import { getLatest, search } from "../Redux/Actions/BookActions";

const SideNav = () => {
  const [selected, setSelected] = useState("handpicked");

  const dispatch = useDispatch();
  const selectAuthor = (e) => {
    const uri = `volumes?q=+inauthor:${e.target.outerText}`;
    dispatch(search(uri));
    setSelected(e.target.outerText);
  };

  const selectHandpicked = () => {
    dispatch(getLatest());
    setSelected("handpicked");
  };

  const authors = [
    "JK Rowling",
    "Jane Austen",
    "Neil Gaiman",
    "Roald Dahl",
    "George RR Martin",
  ];
  return (
    <>
      <Sidebar as={Menu} animation="push" icon="labeled" vertical visible>
        <h2 className="brand-name" onClick={() => selectHandpicked()}>
          UBook Store
        </h2>
        <Menu text vertical className="main-menu">
          <Menu.Item
            className="side-latest"
            name="handpicked"
            onClick={() => selectHandpicked()}
            active={selected === "handpicked"}
          >
            Handpicked
          </Menu.Item>
          <div className="side-menu-authors">
            <Menu.Item header className="side-latest">
              Best Authors
            </Menu.Item>
            {authors.map((author, i) => (
              <Menu.Item
                className="side-latest author-size"
                value={author}
                active={selected === author}
                onClick={(e) => selectAuthor(e)}
                key={i}
              >
                {author}
              </Menu.Item>
            ))}
          </div>
        </Menu>
      </Sidebar>
    </>
  );
};

export default SideNav;
