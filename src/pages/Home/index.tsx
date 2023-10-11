import React, { useRef } from "react";
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
  ErrorText,
} from "./styles";
import HeroTextImg from "../../assets/hero-text.png";
import BooksImg from "../../assets/books.png";
import { BsArrowRight } from "react-icons/bs";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import BookItem from "../../components/BookItem";
import api from "../../api";

const Home: React.FC = () => {
  const [isAdvancedSearch, setIsAdvancedSearch] =
    React.useState<boolean>(false);
  const [titleTerm, setTitleTerm] = React.useState<string>("");
  const [authorTerm, setAuthorTerm] = React.useState<string>("");
  const [isbnTerm, setIsbnTerm] = React.useState<string>("");
  const [maxResults, setMaxResults] = React.useState<number>(10);
  const [publisherTerm, setPublisherTerm] = React.useState<string>("");
  const [titleErrors, setTitleErrors] = React.useState<string[]>([]);

  const titleInputRef = useRef<HTMLInputElement | null>(null);

  const searchBooks = () => {
    if (titleTerm === "") {
      setTitleErrors([...titleErrors, "Please enter a book title"]);
      if (titleInputRef.current) {
        titleInputRef.current.focus();
      }
      return;
    }
    try {
      api.get(`?q=${titleTerm}&maxResults=${maxResults}`).then((response) => {
        console.log(response, "response here");
        return response;
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <HeroWrapper>
        <Hero>
          <HeroLeft>
            <HeroSubText>Best Choice</HeroSubText>
            <HeroText src={HeroTextImg} alt="hero text" />
            <SearchAreaWrapper>
              <div>
                <InputField
                  hasError={titleErrors.length > 0}
                  ref={titleInputRef}
                  placeholder={
                    isAdvancedSearch
                      ? "Title"
                      : "Search for book E.g. Javascript"
                  }
                  value={titleTerm}
                  onChange={(e) => {
                    setTitleErrors([]);
                    setTitleTerm(e.target.value)
                  }}
                  type="string"
                  button={
                    !isAdvancedSearch ? (
                      <RoundButton onClick={searchBooks}>
                        <BsArrowRight style={{ fontSize: 20 }} />
                      </RoundButton>
                    ) : null
                  }
                />
                <div
                  style={{
                    display: titleErrors.length > 0 ? "flex" : "none",
                    flexDirection: "column",
                    padding: "10px 15px",
                  }}
                >
                  {titleErrors.length > 0 &&
                    titleErrors.map((error, index) => {
                      return <ErrorText key={index}>{error}</ErrorText>;
                    })}
                </div>
              </div>
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
