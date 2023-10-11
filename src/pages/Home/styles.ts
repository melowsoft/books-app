import styled from "styled-components";

export const Container = styled.div`

`;

export const Hero = styled.div`
  padding-left: 40px;
  padding-top: 60px;
  display: flex;
`;

export const HeroText = styled.img`
  width: 500px;
  margin-bottom: 20px;
`;

export const HeroLeft = styled.div`
  padding-top: 80px;
`;

export const HeroRight = styled.div``;

export const HeroImage = styled.img``;

export const HeroWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const HeroSubText = styled.h5`
  text-transform: uppercase;
  color: #fd671d;
`;

export const RoundButton = styled.button`
  border: none;
  width: 40px;
  height: 40px;
  background-color: #0c0b22;
  color: #ffffff;
  position: absolute;
  right: 4px;
  bottom: 5px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  transition: transform 0.2s;
  &:hover {
    transform: scale(1.2);
  }
`;

export const SearchAreaWrapper = styled.div`
  width: 400px;
`;

export const SmallButton = styled.button`
  border: none;
  background: none;
  font-size: 14px;
  color: #02537a;
  font-weight: bold;
`;

export const ControlsWrap = styled.div`
  display: "flex";
  justify-content: "space-between";
  align-items: "center";
  margin-top: 8px;
  padding: 0 15px;
`;
export const MoreOptionsWrap = styled.div`
  margin-top: 10px;
  display: grid;
  grid-row-gap: 10px;
`;

export const SearchResultSection = styled.section`
border-top: 1px solid #302f2f;
  margin-top: 100px;
  display: grid;
  grid-template-columns: auto auto auto;
  max-width: 1200px;
  grid-column-gap: 20px;
  grid-row-gap: 30px;
  padding-top: 40px;
`;

export const ErrorText = styled.p`
  font-size: 14px;
  color: #fd671d;
`
