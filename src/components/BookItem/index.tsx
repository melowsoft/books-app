import React from "react";
import { Container, DetailContainer, Thumbnail } from "./styles";
import { Link } from "react-router-dom";
import { InfoText } from "../../pages/BookDetail/styles";

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
        <InfoText>
          By: <strong>{author}</strong>
          </InfoText>
          <InfoText>Pages: <strong>{pages}</strong></InfoText>
      </DetailContainer>
    </Container>
  );
};

export default BookItem;
