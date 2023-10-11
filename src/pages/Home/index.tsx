import React, { useEffect, useRef } from "react";
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
import Helpers from "../../api/helpers";
import ReactPaginate from "react-paginate";
import { PaginationComp } from "../../components/PaginationComp";

const Home: React.FC = () => {
  const isInitialMount = useRef(true);
  const [isAdvancedSearch, setIsAdvancedSearch] =
    React.useState<boolean>(false);
  const [titleTerm, setTitleTerm] = React.useState<string>("");
  const [authorTerm, setAuthorTerm] = React.useState<string>("");
  const [isbnTerm, setIsbnTerm] = React.useState<string>("");
  const [subjectTerm, setSubjectTerm] = React.useState<string>("");
  const [maxResults, setMaxResults] = React.useState<number>(10);
  const [publisherTerm, setPublisherTerm] = React.useState<string>("");
  const [titleErrors, setTitleErrors] = React.useState<string>("");
  const [otherErrors, setOtherErrors] = React.useState<string>("");
  const [totalItems, setTotalItems] = React.useState<number>(0);
  const [searchResults, setSearchResults] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [currentPage, setCurrentPage] = React.useState<number>(0);
  const [totalPages, setTotalPages] = React.useState<number>(0);

  const titleInputRef = useRef<HTMLInputElement | null>(null);

  const state = React.useMemo(
    () => ({
      intitle: titleTerm,
      inauthor: authorTerm,
      isbn: isbnTerm,
      inpublisherTerm: publisherTerm,
      inpublisher: publisherTerm,
      insubject: subjectTerm,
      startIndex: currentPage,
      maxResults,
      totalItems,
      searchResults,
      loading,
    }),
    [
      authorTerm,
      isbnTerm,
      loading,
      maxResults,
      publisherTerm,
      searchResults,
      currentPage,
      subjectTerm,
      titleTerm,
      totalItems,
    ]
  );

  const onSearch = React.useCallback(
    async (currentPage: number) => {
      if (!isAdvancedSearch && titleTerm === "") {
        setTitleErrors("Please enter a book title");
        if (titleInputRef.current) {
          titleInputRef.current.focus();
        }
        return;
      }

      if (
        isAdvancedSearch &&
        titleTerm === "" &&
        authorTerm === "" &&
        isbnTerm === "" &&
        subjectTerm === "" &&
        publisherTerm === ""
      ) {
        setOtherErrors("Please enter at least one search term");
        if (titleInputRef.current) {
          titleInputRef.current.focus();
        }
        return;
      }

      setLoading(true);

      const response = await Helpers.getList(
        Helpers.makeQuery(state),
        currentPage,
        maxResults
      );
      setSearchResults(response.items);
      setTotalItems(response.totalItems);
      setLoading(false);
    },
    [
      authorTerm,
      isAdvancedSearch,
      isbnTerm,
      maxResults,
      publisherTerm,
      state,
      subjectTerm,
      titleTerm,
    ]
  );

  const handlePageChange = React.useCallback(
    (selectedPage: any) => {
      setCurrentPage(selectedPage.selected);
      onSearch(selectedPage.selected);
    },
    [onSearch]
  );

  useEffect(() => {
    setTotalPages(Math.ceil(totalItems / maxResults));
  }, [maxResults, totalItems]);

  // const searchBooks = () => {

  //   if (titleTerm === "") {
  //     setTitleErrors([...titleErrors, "Please enter a book title"]);
  //     if (titleInputRef.current) {
  //       titleInputRef.current.focus();
  //     }
  //     return;
  //   }
  //   try {
  //     api.get(`?q=${titleTerm}&maxResults=${maxResults}`).then((response) => {
  //       console.log(response, "response here");
  //       return response;
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

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
                  hasError={!isAdvancedSearch && titleErrors.length > 0}
                  ref={titleInputRef}
                  placeholder={
                    isAdvancedSearch
                      ? "Search Title"
                      : "Search for book E.g. Javascript"
                  }
                  value={titleTerm}
                  onChange={(e) => {
                    setTitleErrors("");
                    setOtherErrors("");
                    setTitleTerm(e.target.value);
                  }}
                  type="string"
                  button={
                    !isAdvancedSearch ? (
                      <RoundButton onClick={() => onSearch(currentPage)}>
                        <BsArrowRight style={{ fontSize: 20 }} />
                      </RoundButton>
                    ) : null
                  }
                />
                <div
                  style={{
                    display: titleErrors.length > 0 ? "block" : "none",
                    padding: "10px 15px",
                  }}
                >
                  {titleErrors.length > 0 && (
                    <ErrorText>{titleErrors}</ErrorText>
                  )}
                </div>
              </div>
              {isAdvancedSearch ? (
                <MoreOptionsWrap>
                  <InputField
                    placeholder="Search Author"
                    value={authorTerm}
                    onChange={(e) => {
                      setOtherErrors("");
                      setAuthorTerm(e.target.value);
                    }}
                    type="string"
                  />
                  <InputField
                    placeholder="Search Publisher"
                    value={publisherTerm}
                    onChange={(e) => {
                      setOtherErrors("");
                      setPublisherTerm(e.target.value);
                    }}
                    type="string"
                  />
                  <InputField
                    placeholder="Search ISBN"
                    value={isbnTerm}
                    onChange={(e) => {
                      setOtherErrors("");
                      setIsbnTerm(e.target.value);
                    }}
                    type="string"
                  />
                  <InputField
                    placeholder="Search Subject"
                    value={subjectTerm}
                    onChange={(e) => {
                      setOtherErrors("");
                      setSubjectTerm(e.target.value);
                    }}
                    type="string"
                  />
                </MoreOptionsWrap>
              ) : null}
              <div
                style={{
                  display: otherErrors.length > 0 ? "block" : "none",
                  padding: "10px 15px",
                }}
              >
                {otherErrors.length > 0 && <ErrorText>{otherErrors}</ErrorText>}
              </div>
              <ControlsWrap
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <SmallButton
                  onClick={() => {
                    setTitleErrors("");
                    setIsAdvancedSearch(!isAdvancedSearch);
                  }}
                >
                  {isAdvancedSearch
                    ? "Switch to Simple Search"
                    : "Advanced Search"}
                </SmallButton>

                {isAdvancedSearch ? (
                  <Button onClick={() => onSearch(currentPage)}>Search</Button>
                ) : null}
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
          {searchResults.length > 0 && !loading
            ? searchResults.map((book) => (
                <BookItem
                  key={book.id}
                  id={book.id}
                  thumbnail={book?.volumeInfo?.imageLinks?.smallThumbnail}
                  title={book.volumeInfo.title}
                  author={book.volumeInfo.authors[0]}
                  pages={book.volumeInfo.pageCount}
                />
              ))
            : null}
        </SearchResultSection>
      </div>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <PaginationComp
          onChange={handlePageChange}
          pageCount={totalPages}
          currentPage={currentPage}
        />
      </div>
    </Container>
  );
};

export default Home;
