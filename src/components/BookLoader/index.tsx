import React from "react";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Container, DetailContainer } from "./styles";
import { InfoText } from "../../pages/BookDetail/styles";

const BookLoader = () => {
  return (
    <Container>
      <Skeleton width={"150px"} height="200px"/>

      <DetailContainer>
      <Skeleton width={"150px"} height="20px"/>

        <InfoText>
        <Skeleton width={"100px"} height="20px"/>
        </InfoText>
        <InfoText>
        <Skeleton width={"80px"} height="20px"/>
        </InfoText>
      </DetailContainer>
    </Container>
  );
};

export default BookLoader;
