import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #302f2f;
  padding-bottom: 15px;
  padding-left: 20px;
  padding-right: 40px;
  a {
    text-decoration: none;
  }
`;

export const LeftBox = styled.div``;

export const RightBox = styled.div`
    display: flex;
    align-items: center;
`;

export const LogoWrap = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 45px;
`;

export const BorderBox = styled.div`
padding-left: 20px;
border-left: 1px solid #302f2f;
height: 45px;
display: flex;
align-items: center;
`
