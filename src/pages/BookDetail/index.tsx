import React from "react";
import {
  BigThumbnail,
  Container,
  DetailContainer,
  DetailsBox,
  InfoText,
  ShowArea,
} from "./styles";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

const BookDetail = () => {
  return (
      <Container>
          
          <DetailContainer>
          
              <ShowArea>
              <Link to="/">
                      <div style={{ display: "flex", alignItems: "center" }}> <BsArrowLeft style={{ fontSize: 20, marginRight: 5 }} />Back</div>
                    </Link>
          <BigThumbnail
            src="http://books.google.com/books/content?id=RCoHzwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            alt="big thumbnail"
          />
          <DetailsBox>
            <h3>The Art of Money Making</h3>
            <h4>
              <span>Authors: </span>
              The Triumph and Tragedy of J. Robert Oppenheimer Kai Bird, Martin
              J. Sherwin
            </h4>

            <InfoText>
              {" "}
              Published: <strong>2005</strong>
            </InfoText>
            <InfoText>
              {" "}
              Publisher: <strong>Cliffs Notes</strong>
            </InfoText>
            <InfoText>
              {" "}
              Pages: <strong>800</strong>
            </InfoText>

            <p>
              The classic novel about a daring experiment in human intelligence
              Charlie Gordon, IQ 68, is a floor sweeper and the gentle butt of
              everyone's jokes - until an experiment in the enhancement of human
              intelligence turns him into a genius. But then Algernon, the mouse
              whose triumphal experimental transformation preceded his, fades
              and dies, and Charlie has to face the possibility that his
              salvation was only temporary.
            </p>
          </DetailsBox>
        </ShowArea>
      </DetailContainer>
    </Container>
  );
};

export default BookDetail;
