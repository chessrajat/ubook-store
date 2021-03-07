import React from "react";
import { Card, Image } from "semantic-ui-react";

const BookCard = () => {
  return (
    <>
      <Card className="book-card">
        <Image
          src="http://books.google.com/books/content?id=x6aeDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
          wrapped
        />
        <Card.Content>
          <Card.Header>Book name is here</Card.Header>
          <Card.Meta>Author name is here</Card.Meta>
        </Card.Content>
      </Card>
    </>
  );
};

export default BookCard;
