import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import BookItem from "..";

describe("BookItem component", () => {
  const bookData = {
    id: "1",
    title: "Sample Book",
    author: "John Doe",
    thumbnail: "sample.jpg",
    pages: 200,
  };

  it("should render the component with provided data", () => {
    render(
      <BrowserRouter>
        <BookItem {...bookData} />
      </BrowserRouter>
    );

    // Check if title, author, and pages are displayed
    expect(screen.getByText(/Sample Book/i)).toBeInTheDocument();
    expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
    expect(screen.getByText(/200/i)).toBeInTheDocument();

    // Check if thumbnail is displayed
    expect(screen.getByAltText(/Sample Book/i)).toBeInTheDocument();
  });

  it("should render a placeholder when thumbnail is not provided", () => {
    const bookDataWithoutThumbnail = { ...bookData, thumbnail: "" };

    render(
      <BrowserRouter>
        <BookItem {...bookDataWithoutThumbnail} />
      </BrowserRouter>
    );

    // Check if placeholder text is displayed
    expect(screen.getByText("No Image")).toBeInTheDocument();

    // Check if thumbnail is not displayed
    expect(screen.queryByAltText("book thumbnail")).toBeNull();
  });

  it("should navigate to the correct book detail page", () => {
      render(
        <BrowserRouter>
          <BookItem {...bookData} />
        </BrowserRouter>
      );
      
    const link = screen.getByText("Sample Book");

    // Simulate a click on the link
    fireEvent.click(link);

    // Check if the correct URL is navigated
    expect(window.location.pathname).toBe("/book/1");
  });

  // Add more test cases for different combinations of props and scenarios
});
