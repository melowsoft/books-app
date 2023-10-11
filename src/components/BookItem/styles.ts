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
