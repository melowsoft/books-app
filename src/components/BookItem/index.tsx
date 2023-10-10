import React from "react";
import { Container, DetailContainer, Thumbnail } from "./styles";

interface BookItemProps {
  title: string;
  author: string;
    thumbnail: string;
    pages: number;
}

const BookItem = ({ title, author, thumbnail, pages }: BookItemProps) => {
  return (
    <Container>
      <Thumbnail src={thumbnail} alt="thumbnail" />
      <DetailContainer>
        <h3>{title}</h3>
              <p style={{marginTop: 5}}><span style={{fontSize: 12}}>by:</span> {author}</p>
              <p style={{fontSize: 12, marginTop: 5}}>Pages: {pages}</p>
      </DetailContainer>
    </Container>
  );
};

export default BookItem;
