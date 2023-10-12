import React, { useRef, useCallback, useState, useEffect } from "react";

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
import { PaginationComp } from "../../components/PaginationComp";
import { useSearch } from "../../context/SearchContext";
import { usePagination } from "../../hooks/usePagination";
import { useErrorHandling } from "../../hooks/useErrorHandling";
import { ButtonText } from "../../constants";
import { useInput } from "../../context/InputsContext";
import BookLoader from "../../components/BookLoader";

const Home: React.FC = () => {
  const { searchResults, loading, maxResults, performSearch, totalItems } =
    useSearch();
  const {
    titleTerm,
    setTitleTerm,
    authorTerm,
    setAuthorTerm,
    isbnTerm,
    setIsbnTerm,
    subjectTerm,
    setSubjectTerm,
    publisherTerm,
    setPublisherTerm,
    isAdvancedSearch,
    setIsAdvancedSearch,
  } = useInput();
  const { currentPage, totalPages, setCurrentPage } = usePagination(
    totalItems,
    maxResults
  );
  const { titleErrors, setTitleErrors, otherErrors, setOtherErrors } =
    useErrorHandling();

  const [isMounted, setIsMounted] = useState<boolean>(false);

  const titleInputRef = useRef<HTMLInputElement | null>(null);

  const isTitleValid = useCallback(() => {
    if (titleTerm === "") {
      setTitleErrors("Please enter a book title");
      if (titleInputRef.current) {
        titleInputRef.current.focus();
      }
      return false;
    }
    return true;
  }, [setTitleErrors, titleTerm]);

  const hasAdvancedSearchTerms = useCallback(() => {
    if (
      !titleTerm &&
      !authorTerm &&
      !isbnTerm &&
      !publisherTerm &&
      !subjectTerm
    ) {
      setOtherErrors("Please enter at least one search term");
      return false;
    } else {
      return true;
    }
  }, [
    authorTerm,
    isbnTerm,
    publisherTerm,
    setOtherErrors,
    subjectTerm,
    titleTerm,
  ]);

  const onSearch = useCallback(
    async (currentPage: number) => {
      if (!isAdvancedSearch && !isTitleValid()) {
        return;
      }

      if (isAdvancedSearch && !hasAdvancedSearchTerms()) {
        setOtherErrors("Please enter at least one search term");
        if (titleInputRef.current) {
          titleInputRef.current.focus();
        }
        return;
      }

      const state = {
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
      };

      performSearch(state, currentPage);
    },
    [
      isAdvancedSearch,
      isTitleValid,
      hasAdvancedSearchTerms,
      titleTerm,
      authorTerm,
      isbnTerm,
      publisherTerm,
      subjectTerm,
      maxResults,
      totalItems,
      searchResults,
      loading,
      performSearch,
      setOtherErrors,
    ]
  );

  const handlePageChange = useCallback(
    (selectedPage: any) => {
      setCurrentPage(selectedPage.selected);
      onSearch(selectedPage.selected);
    },
    [onSearch, setCurrentPage]
  );

  useEffect(() => {
    setIsMounted(true);

    if (isMounted) {
      setTitleErrors("");
      setOtherErrors("");
    }
    if (isMounted && isAdvancedSearch) {
      setOtherErrors("");
    }

    return () => {
      setIsMounted(false);
    };
  }, [isMounted, setOtherErrors, setTitleErrors, isAdvancedSearch]);

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
                    ? ButtonText.SIMPLE_SEARCH
                    : ButtonText.ADVANCED_SEARCH}
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
          {loading && Array.from(Array(9).keys()).map((i) => <BookLoader key={i} />)}
        </SearchResultSection>
      </div>
     
      {searchResults.length > 0 && !loading && (
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <PaginationComp
            onChange={handlePageChange}
            pageCount={totalPages}
            currentPage={currentPage}
          />
        </div>
      )}
    </Container>
  );
};

export default Home;
