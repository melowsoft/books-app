import React from "react";
import {
  Container,
  Hero,
  HeroLeft,
  HeroText,
  HeroRight,
  HeroImage,
  HeroWrapper,
  HeroSubText,
  RoundButton,
  SearchAreaWrapper,
  SmallButton,
  ControlsWrap,
} from "./styles";
import HeroTextImg from "../../assets/hero-text.png";
import BooksImg from "../../assets/books.png";
import { BsArrowRight } from "react-icons/bs";
import InputField from "../../components/InputField";
import Button from "../../components/Button";

const Home: React.FC = () => {
  const [isAdvancedSearch, setIsAdvancedSearch] =
    React.useState<boolean>(false);
  const [bookTerm, setBookTerm] = React.useState<string>("");
  return (
    <Container>
      <HeroWrapper>
        <Hero>
          <HeroLeft>
            <HeroSubText>Best Choice</HeroSubText>
            <HeroText src={HeroTextImg} alt="hero text" />
            <SearchAreaWrapper>
              <InputField
                placeholder="Search for book"
                value={bookTerm}
                onChange={(e) => setBookTerm(e.target.value)}
                type="string"
                button={
                  !isAdvancedSearch ? (
                    <RoundButton>
                      <BsArrowRight style={{ fontSize: 20 }} />
                    </RoundButton>
                  ) : null
                }
              />
              <ControlsWrap
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <SmallButton
                  onClick={() => setIsAdvancedSearch(!isAdvancedSearch)}
                >
                  {isAdvancedSearch
                    ? "Switch to Simple Search"
                    : "Advanced Search"}
                </SmallButton>

                {isAdvancedSearch ? <Button>Search</Button> : null}
              </ControlsWrap>
            </SearchAreaWrapper>
          </HeroLeft>
          <HeroRight>
            <HeroImage src={BooksImg} alt="hero image" />
          </HeroRight>
        </Hero>
      </HeroWrapper>
    </Container>
  );
};

export default Home;
