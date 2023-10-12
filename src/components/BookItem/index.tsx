import React from "react";
import {
  Container,
  DetailContainer,
  SmallImagePlaceholder,
  Thumbnail,
} from "./styles";
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
        {thumbnail ? (
          <Thumbnail src={thumbnail} alt={title} />
        ) : (
          <SmallImagePlaceholder>No Image </SmallImagePlaceholder>
        )}
      </Link>
      <DetailContainer>
        <Link key={id} to={`/book/${id}`}>
          <h3>{title}</h3>
        </Link>
        <InfoText>
          By: <strong>{author}</strong>
        </InfoText>
        <InfoText>
          Pages: <strong>{pages}</strong>
        </InfoText>
      </DetailContainer>
    </Container>
  );
};

export default BookItem;
