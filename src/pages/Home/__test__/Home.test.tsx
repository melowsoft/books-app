import {
  render,
  fireEvent,
} from "@testing-library/react";
import Home from "..";
import { SearchProvider } from "../../../context/SearchContext";
import { InputProvider } from "../../../context/InputsContext";


const data = [
    {
      id: "1",
      volumeInfo: {
        title: "JavaScript Book 1",
        imageLinks: { smallThumbnail: "Image one" },
        authors: ["Author 1", "Author 2"],
        publisher: "Publisher 1",
        publishedDate: "2021-01-01",
        pageCount: 100,
      },
    },
  ]

describe("Book tests", () => {
  describe("Rendering the Home Component", () => {
    describe("When the Home Component is rendered", () => {
      let info: any = null;

      beforeEach(() => {
        info = renderComponent();
      });

      test("Then it should render the Home Component correctly", () => {
        const simpleSearchInput = info.getByRole("textbox");
        expect(simpleSearchInput).toBeInTheDocument();

        const bestChoiceText = info.getByText("Best Choice");
        expect(bestChoiceText).toBeInTheDocument();

        const advancedSearchToggleButton = info.getByRole("button", {
          name: "Advanced Search",
        });
        expect(advancedSearchToggleButton).toBeInTheDocument();
      });

      test("User should be able to type into the search input", () => {
        const simpleSearchInput = info.getByRole("textbox");
        fireEvent.change(simpleSearchInput, {
          target: { value: "javascript" },
        });
        expect(simpleSearchInput).toHaveValue("javascript");
      });

      test("Advanced Search toggle should work correctly", () => {
        const advancedSearchToggleButton = info.getByRole("button", {
          name: "Advanced Search",
        });
        fireEvent.click(advancedSearchToggleButton);

        const authorInput = info.getByPlaceholderText("Search Author");
        const publisherInput = info.getByPlaceholderText("Search Publisher");
        const isbnInput = info.getByPlaceholderText("Search ISBN");
        const subjectInput = info.getByPlaceholderText("Search Subject");

        expect(authorInput).toBeInTheDocument();
        expect(publisherInput).toBeInTheDocument();
        expect(isbnInput).toBeInTheDocument();
        expect(subjectInput).toBeInTheDocument();
      });
    });
  });

    describe("Searching for a book by title", () => {
      describe("Given the Home Component", () => {
        let info: any = null;

        beforeEach(() => {
          info = renderComponent();
        });

        test("User can search for a book by title", () => {
          const simpleSearchInput = info.getByRole("button", {
            name: "Simple search button",
          });

          fireEvent.change(simpleSearchInput, { target: { value: "React" } });

          // Add assertions for search results, 
          // and if the results match the search criteria
          // You can use screen queries to access elements in the search results section
        });
      });
    });


  describe("Toggling the search mode", () => {
    describe("Given the Home Component", () => {
      let info: any = null;

      beforeEach(() => {
        info = renderComponent();
      });

      test("User should be able to toggle between Simple and Advanced Search", () => {
        const advancedSearchToggleButton = info.getByRole("button", {
          name: "Advanced Search",
        });
        fireEvent.click(advancedSearchToggleButton);

        const authorInput = info.getByPlaceholderText("Search Author");
        const publisherInput = info.getByPlaceholderText("Search Publisher");
        const isbnInput = info.getByPlaceholderText("Search ISBN");
        const subjectInput = info.getByPlaceholderText("Search Subject");

        expect(authorInput).toBeInTheDocument();
        expect(publisherInput).toBeInTheDocument();
        expect(isbnInput).toBeInTheDocument();
        expect(subjectInput).toBeInTheDocument();

        const simpleSearchToggleButton = info.queryByRole("button", {
          name: "Switch to Simple Search",
        });
        fireEvent.click(simpleSearchToggleButton);

        expect(info.queryByPlaceholderText("Search Author")).toBeNull();
        expect(info.queryByPlaceholderText("Search Publisher")).toBeNull();
        expect(info.queryByPlaceholderText("Search ISBN")).toBeNull();
        expect(info.queryByPlaceholderText("Search Subject")).toBeNull();
      });
    });
  });
});

function renderComponent() {
  return render(
    <SearchProvider>
      <InputProvider>
        <Home />
      </InputProvider>
    </SearchProvider>
  );
}
