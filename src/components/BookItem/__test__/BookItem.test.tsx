import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import BookItem from "..";

describe("BookItem component", () => {
  const bookData = {
    id: "1",
    title: "Sample Book",
    authors: ["John Doe"],
    thumbnail: "sample.jpg",
    pages: 200,
  };

  it("should render the component with provided data", () => {
    render(
      <BrowserRouter>
        <BookItem {...bookData} />
      </BrowserRouter>
    );

    expect(screen.getByText(/Sample Book/i)).toBeInTheDocument();
    expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
    expect(screen.getByText(/200/i)).toBeInTheDocument();

    expect(screen.getByAltText(/Sample Book/i)).toBeInTheDocument();
  });

  it("should render a placeholder when thumbnail is not provided", () => {
    const bookDataWithoutThumbnail = { ...bookData, thumbnail: "" };

    render(
      <BrowserRouter>
        <BookItem {...bookDataWithoutThumbnail} />
      </BrowserRouter>
    );

    expect(screen.getByText("No Image")).toBeInTheDocument();

    expect(screen.queryByAltText("book thumbnail")).toBeNull();
  });

  it("should navigate to the correct book detail page", () => {
    render(
      <BrowserRouter>
        <BookItem {...bookData} />
      </BrowserRouter>
    );

    const link = screen.getByText("Sample Book");

    fireEvent.click(link);

    expect(window.location.pathname).toBe("/book/1");
  });
});
