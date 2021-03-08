import React, { useState } from "react";
import { Card, Image } from "semantic-ui-react";
import BookInfo from "./BookInfo";

const BookCard = ({ book }) => {
  const [open, setOpen] = useState(false);
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
                book.volumeInfo.imageLinks
                  ? book.volumeInfo.imageLinks.thumbnail
                  : "/img/nocover.jpg"
              }
              wrapped
            />
            <Card.Content>
              <Card.Header className="change_font">
                {book.volumeInfo.title}
              </Card.Header>
              <Card.Meta className="change_font">
                {book.volumeInfo.authors &&
                  book.volumeInfo.authors.map((author, i) => (
                    <div key={i}>{author} | </div>
                  ))}
              </Card.Meta>
            </Card.Content>
          </Card>
        </>
      )}
    </>
  );
};

export default BookCard;
