import React from "react";
import { Grid } from "semantic-ui-react";
import BookCard from "./BookCard";

const BooksGrid = () => {
  return (
    <>
      <h2>Latest</h2>
      <Grid className="grid-container" stackable doubling columns={6}>
        <Grid.Column>
          <BookCard />
        </Grid.Column>
        <Grid.Column>
          <BookCard />
        </Grid.Column>
        <Grid.Column>
          <BookCard />
        </Grid.Column>
        <Grid.Column>
          <BookCard />
        </Grid.Column>
        <Grid.Column>
          <BookCard />
        </Grid.Column>
      </Grid>
    </>
  );
};

export default BooksGrid;
