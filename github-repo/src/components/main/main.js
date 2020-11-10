import React from "react";
import "./main.css";
import Header from "../header/header";
import Sidebar from "../sidebar/sidebar";
import SearchBar from "../searchBar/searchBar";
import RepoList from "../repoList/repoList";
import Footer from "../footer/footer";

import axios from "axios";

class Main extends React.Component {
  state = {
    repos: [],
  };

  componentDidMount() {
    axios
      .get("https://api.github.com/users/" + "Fedigs" + "/repos", {
        params: {
          sort: "pushed",
          //direction: this.state.sortDirection
        },
      })
      .then((res) => {
        console.log(res.data);
        this.setState({ repos: res.data });
      });
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <Sidebar />

        <article className="main">
          <SearchBar />

          <RepoList />
          {/* <ul>
            {this.state.repos.map((repo) => (
              <li key={repo.id}>{repo.name}</li>
            ))}
          </ul> */}
        </article>
        <Footer />
      </div>
    );
  }
}

export default Main;
