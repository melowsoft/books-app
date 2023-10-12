import React from "react";
import {
  render,
  screen,
} from "@testing-library/react";
import { MemoryRouter, Route } from "react-router-dom";
import BookDetail from "..";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    id: "123", 
  }),
}));

describe("BookDetail Component", () => {
  it("renders without errors", () => {
    render(
      <MemoryRouter initialEntries={["/book/123"]}>
        <Route path="/book/:id">
          <BookDetail />
        </Route>
      </MemoryRouter>
    );

    expect(screen.getByLabelText("Loading...")).toBeInTheDocument();
  });

  it("displays loading state", () => {
    render(
      <MemoryRouter initialEntries={["/book/123"]}>
        <Route path="/book/:id">
          <BookDetail />
        </Route>
      </MemoryRouter>
    );

    expect(screen.getByLabelText("Loading...")).toBeInTheDocument();
  });
  
});
