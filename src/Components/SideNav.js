import React from "react";
import { Header, Menu, Segment, Sidebar } from "semantic-ui-react";

const SideNav = () => {
  const authors = [
    "JK Rowling",
    "Jane Austen",
    "Neil Gaiman",
    "Roald Dahl",
    "George RR Martin",
  ];
  return (
    <>
      <Sidebar
        style={{ width: "250px" }}
        as={Menu}
        animation="push"
        icon="labeled"
        vertical
        visible
      >
        <h2 className="brand-name">UBook Store</h2>
        <Menu text vertical className="main-menu">
          <Menu.Item className="side-latest">Latest</Menu.Item>
          <div className="side-menu-authors">
            <Menu.Item header>Best Authors</Menu.Item>
            {authors.map((author, i) => (
              <Menu.Item key={i}>{author}</Menu.Item>
            ))}
          </div>
        </Menu>
      </Sidebar>
    </>
  );
};

export default SideNav;
