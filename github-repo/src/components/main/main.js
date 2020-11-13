import React from "react";
import "./main.css";
import Header from "../header/header";
import Sidebar from "../sidebar/sidebar";
import SearchBar from "../searchBar/searchBar";
import { get_User_Informations } from "../../services/UserService";
class Main extends React.Component {
  state = {
    login: "",
    name: "",
    avatarUrl: "",
    bio: "",
    email: "",
    nbFollowers: 0,
    nbFollowing: 0,
    nbRepositories: 0,
    nbStarredRepositories: 0,
  };

  componentDidMount() {
    //get user informations from the User service
    get_User_Informations()
      .then((res) => {
        this.setState({
          login: res.data.data.user.login,
          name: res.data.data.user.name,
          avatarUrl: res.data.data.user.avatarUrl,
          bio: res.data.data.user.bio,
          email: res.data.data.user.email,
          nbFollowers: res.data.data.user.followers.totalCount,
          nbFollowing: res.data.data.user.following.totalCount,
          nbRepositories: res.data.data.user.repositories.totalCount,
          nbStarredRepositories:
            res.data.data.user.starredRepositories.totalCount,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="wrapper">
        <Header totalCount={this.state.nbRepositories} />
        <Sidebar
          login={this.state.login}
          name={this.state.name}
          avatarUrl={this.state.avatarUrl}
          bio={this.state.bio}
          email={this.state.email}
          nbFollowers={this.state.nbFollowers}
          nbFollowing={this.state.nbFollowing}
          nbStarredRepositories={this.state.nbStarredRepositories}
        />
        <article className="main">
          <SearchBar />
        </article>
      </div>
    );
  }
}

export default Main;
