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
  MoreOptionsWrap,
  SearchResultSection,
} from "./styles";
import HeroTextImg from "../../assets/hero-text.png";
import BooksImg from "../../assets/books.png";
import { BsArrowRight } from "react-icons/bs";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import BookItem from "../../components/BookItem";

const Home: React.FC = () => {
  const [isAdvancedSearch, setIsAdvancedSearch] =
    React.useState<boolean>(false);
  const [bookTerm, setBookTerm] = React.useState<string>("");
  const [authorTerm, setAuthorTerm] = React.useState<string>("");
  const [isbnTerm, setIsbnTerm] = React.useState<string>("");
  const [publisherTerm, setPublisherTerm] = React.useState<string>("");

  return (
    <Container>
      <HeroWrapper>
        <Hero>
          <HeroLeft>
            <HeroSubText>Best Choice</HeroSubText>
            <HeroText src={HeroTextImg} alt="hero text" />
            <SearchAreaWrapper>
              <InputField
                placeholder={isAdvancedSearch ? "Title" : "Search for book"}
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
              {isAdvancedSearch ? (
                <MoreOptionsWrap>
                  <InputField
                    placeholder="Author"
                    value={authorTerm}
                    onChange={(e) => setAuthorTerm(e.target.value)}
                    type="string"
                  />
                  <InputField
                    placeholder="Publisher"
                    value={publisherTerm}
                    onChange={(e) => setPublisherTerm(e.target.value)}
                    type="string"
                  />
                  <InputField
                    placeholder="ISBN"
                    value={isbnTerm}
                    onChange={(e) => setIsbnTerm(e.target.value)}
                    type="string"
                  />
                </MoreOptionsWrap>
              ) : null}
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

      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <SearchResultSection>
          <BookItem
            id="vnmnhsa89smnbds"
            thumbnail="http://books.google.com/books/content?id=RCoHzwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            title="Rapid Money Making from Home"
            author="Ben James"
            pages={100}
          />
          <BookItem
            id="vnmnhsa89smnbds"
            thumbnail="http://books.google.com/books/content?id=RCoHzwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            title="Rapid Money Making from Home"
            author="Ben James"
            pages={100}
          />
          <BookItem
            id="vnmnhsa89smnbds"
            thumbnail="http://books.google.com/books/content?id=RCoHzwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            title="Rapid Money Making from Home"
            author="Ben James"
            pages={100}
          />
          <BookItem
            id="vnmnhsa89smnbds"
            thumbnail="http://books.google.com/books/content?id=RCoHzwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            title="Rapid Money Making from Home"
            author="Ben James"
            pages={100}
          />
          <BookItem
            id="vnmnhsa89smnbds"
            thumbnail="http://books.google.com/books/content?id=RCoHzwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            title="Rapid Money Making from Home"
            author="Ben James"
            pages={100}
          />
          <BookItem
            id="vnmnhsa89smnbds"
            thumbnail="http://books.google.com/books/content?id=RCoHzwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            title="Rapid Money Making from Home"
            author="Ben James"
            pages={100}
          />
        </SearchResultSection>
      </div>
    </Container>
  );
};

export default Home;
