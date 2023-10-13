import React from "react";
import {
  Container,
  DetailContainer,
  DetailsBox,
  ShowArea,
} from "./styles";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const BookDetailLoader = () => {


  return (
    <Container aria-label="Loading...">
      <DetailContainer >
        <ShowArea>
         
          <Skeleton width={"250px"} height="350px"/>
          <DetailsBox>
          <Skeleton width={"400px"} height="30px" style={{marginTop: 10}}/>
          <Skeleton width={"350px"} height="30px" style={{marginTop: 10}}/>

          <Skeleton width={"300px"} height="15px" style={{marginTop: 10}}/>
          <Skeleton width={"250px"} height="15px" style={{marginTop: 10}}/>
         

          <Skeleton width={"500px"} height="15px" style={{marginTop:20}}/>
          <Skeleton width={"500px"} height="15px" style={{marginTop:5}}/>
          <Skeleton width={"500px"} height="15px" style={{marginTop:5}}/>
          <Skeleton width={"500px"} height="15px" style={{marginTop:5}}/>
          <Skeleton width={"500px"} height="15px" style={{marginTop:5}}/>
          </DetailsBox>
        </ShowArea>
      </DetailContainer>
    </Container>
  );
};

export default BookDetailLoader;
