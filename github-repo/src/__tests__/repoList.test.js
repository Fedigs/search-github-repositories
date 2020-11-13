import React from "react";
import { render } from "@testing-library/react";
import RepoList from "../components/repoList/repoList";
import mockRepoList from "../mock/mockRepoList";

describe("test Repositories list", () => {
  test("should render a list", () => {
    const { getAllByTestId } = render(<RepoList repositories={mockRepoList} />);

    const repoNames = getAllByTestId("repoName").map((a) => a.textContent);
    const fakeRepoNames = mockRepoList.map((r) => r.node.name);
    expect(repoNames).toEqual(fakeRepoNames);

    const repoDescriptions = getAllByTestId("description").map(
      (p) => p.textContent
    );
    const fakeRepoDescriptions = mockRepoList.map((r) => r.node.description);
    expect(repoDescriptions).toEqual(fakeRepoDescriptions);
  });
});
