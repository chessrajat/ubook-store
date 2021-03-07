import React from "react";
import { Grid } from "semantic-ui-react";
import BookCard from "./BookCard";

const BooksGrid = ({ books }) => {
  return (
    <>
      <h2>Latest</h2>
      <Grid className="grid-container" stackable doubling columns={6}>
        {books &&
          books.map((book, i) => (
            <Grid.Column key={i}>
              <BookCard book={book} />
            </Grid.Column>
          ))}
      </Grid>
    </>
  );
};

export default BooksGrid;
