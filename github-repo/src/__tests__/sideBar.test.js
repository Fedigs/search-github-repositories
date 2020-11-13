import React from "react";
import { render } from "@testing-library/react";
import Sidebar from "../components/sidebar/sidebar";

import mockUser from "../mock/mockUser";

describe("test User Informations", () => {
  test("should contains all user informations", () => {
    const { getByTestId } = render(
      <Sidebar
        login={mockUser.user.login}
        name={mockUser.user.name}
        bio={mockUser.user.bio}
        email={mockUser.user.email}
        nbFollowers={mockUser.user.followers.totalCount}
        nbFollowing={mockUser.user.following.totalCount}
        nbStarredRepositories={mockUser.user.starredRepositories.totalCount}
      />
    );
    const userLogin = getByTestId("login").textContent;
    const fakeUserLogin = mockUser.user.login;
    expect(userLogin).toEqual(fakeUserLogin);

    const userName = getByTestId("name").textContent;
    const fakeUserName = mockUser.user.name;
    expect(userName).toEqual(fakeUserName);

    const userBio = getByTestId("bio").textContent;
    const fakeUserBio = mockUser.user.bio;
    expect(userBio).toEqual(fakeUserBio);

    const userEmail = getByTestId("email").textContent.trim();
    const fakeUserEmail = mockUser.user.email;
    expect(userEmail).toEqual(fakeUserEmail);

    const userNbFollowers = getByTestId("nbFollowers").textContent;
    const fakeUserNbFollowers = mockUser.user.followers.totalCount;
    expect(Number(userNbFollowers)).toEqual(fakeUserNbFollowers);

    const userNbFollowing = getByTestId("nbFollowing").textContent;
    const fakeUserNbFollowing = mockUser.user.following.totalCount;
    expect(Number(userNbFollowing)).toEqual(fakeUserNbFollowing);

    const userNbStarredRepositories = getByTestId("nbStarredRepositories")
      .textContent;
    const fakeUserNbStarredRepositories =
      mockUser.user.starredRepositories.totalCount;
    expect(Number(userNbStarredRepositories)).toEqual(
      fakeUserNbStarredRepositories
    );
  });
});
