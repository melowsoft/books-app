import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  display: flex;
`;

export const Thumbnail = styled.img`
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.3);
  }
`;

export const DetailContainer = styled.div`
  padding: 10px;

  a {
    text-decoration: none;
    color: #0c0b22;

    &:hover {
      color: #fd671d;
    }
  }
`;

export const SmallImagePlaceholder = styled.div`
    width: 150px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid grey;
    margin-top: 30px;
    text-decoration: none;
   
`