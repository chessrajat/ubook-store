import React, { useState } from "react";
import { Card, Image } from "semantic-ui-react";
import BookInfo from "./BookInfo";

const BookCard = ({ book }) => {
  const [open, setOpen] = useState(false);
  console.log(book);
  return (
    <>
      {book && (
        <>
          <BookInfo
            modalopen={open}
            modalclose={() => setOpen(false)}
            book={book}
          />
          <Card className="book-card" onClick={() => setOpen(true)}>
            <Image
              src={
                book.volumeInfo.imageLinks &&
                book.volumeInfo.imageLinks.thumbnail
              }
              wrapped
            />
            <Card.Content>
              <Card.Header>{book.volumeInfo.title}</Card.Header>
              <Card.Meta>
                {book.volumeInfo.authors &&
                  book.volumeInfo.authors.map((author) => <>{author} | </>)}
              </Card.Meta>
            </Card.Content>
          </Card>
        </>
      )}
    </>
  );
};

export default BookCard;
