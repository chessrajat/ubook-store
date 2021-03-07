import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Image, Modal, Rating } from "semantic-ui-react";

const BookInfo = ({ modalopen, modalclose, book }) => {
  return (
    <>
      <Modal onClose={() => modalclose()} open={modalopen}>
        <Modal.Header>
          {book.volumeInfo.title}
          <br></br>{" "}
          <p style={{ fontSize: "12px" }}>
            {book.volumeInfo.authors &&
              book.volumeInfo.authors.map((author) => <span>{author} | </span>)}
          </p>
        </Modal.Header>
        <Modal.Content image scrolling>
          <Image
            size="medium"
            style={{ width: "200%" }}
            src={
              book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail
            }
            wrapped
          />
          <Modal.Description style={{ width: "700%" }}>
            <p>{book.volumeInfo.description}</p>
            <Rating
              as="p"
              icon="star"
              maxRating={5}
              defaultRating={book.volumeInfo.averageRating}
              disabled
            />
            <p>Published On: {book.volumeInfo.publishedDate}</p>
            <p>Language : {book.volumeInfo.language}</p>
            <p>Maturaty Rating : {book.volumeInfo.maturityRating}</p>
            <p>Page count : {book.volumeInfo.pageCount}</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color="black" onClick={() => modalclose()}>
            Close
          </Button>
          <Button
            content="Yep, Let's Read"
            positive
            as="a"
            target="_blank"
            href={book.volumeInfo.previewLink}
          />
        </Modal.Actions>
      </Modal>
    </>
  );
};

export default BookInfo;
