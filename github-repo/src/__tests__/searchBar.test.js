import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SearchBar from "../components/searchBar/searchBar";

describe(" test Searchbar ", () => {
  test("should works without crashing ", () => {
    const { debug } = render(<SearchBar />);
    //debug();
  });
  test("should contains all inputs", () => {
    const { queryByTestId } = render(<SearchBar />);

    expect(queryByTestId("searchbar")).toBeTruthy();
    expect(queryByTestId("TypeButton")).toBeTruthy();
    expect(queryByTestId("LanguageButton")).toBeTruthy();
    expect(queryByTestId("NewRepoButton")).toBeTruthy();
  });

  test("Input value updates on change", () => {
    const { queryByTestId } = render(<SearchBar />);

    const searchInput = queryByTestId("searchbar");
    fireEvent.change(searchInput, { target: { value: "test" } });
    expect(searchInput.value).toBe("test");
  });
});
