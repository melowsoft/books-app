import React from "react";
import { Container, DetailContainer, Thumbnail } from "./styles";
import { Link } from "react-router-dom";

interface BookItemProps {
  id: string;
  title: string;
  author: string;
  thumbnail: string;
  pages: number;
}

const BookItem = ({ id, title, author, thumbnail, pages }: BookItemProps) => {
  return (
    <Container>
      <Link key={id} to={`/book/${id}`}>
        <Thumbnail src={thumbnail} alt="thumbnail" />
      </Link>
      <DetailContainer>
        <Link key={id} to={`/book/${id}`}>
          <h3>{title}</h3>
        </Link>
        <p style={{ marginTop: 5 }}>
          <span style={{ fontSize: 12 }}>by:</span> {author}
        </p>
        <p style={{ fontSize: 12, marginTop: 5 }}>Pages: {pages}</p>
      </DetailContainer>
    </Container>
  );
};

export default BookItem;
