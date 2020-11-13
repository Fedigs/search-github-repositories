import React from "react";
import "./searchBar.css";
import RepoList from "../repoList/repoList";
import { Input, Button, Divider } from "antd";
import { CaretDownOutlined, BookOutlined } from "@ant-design/icons";
import { get_All_Repositories } from "../../services/RepoService";
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      repositories: [],
    };
  }
  repos = [];
  reposAfterFilter = [];
  componentDidMount() {
    get_All_Repositories()
      .then((res) => {
        console.log(res.data.data.repositoryOwner);
        this.setState({
          repositories: res.data.data.repositoryOwner.repositories.edges,
        });
        this.repos = res.data.data.repositoryOwner.repositories.edges;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  SearchRepositories(value) {
    this.reposAfterFilter = [];
    this.setState({ searchValue: value });
    this.repos.map((repo) => {
      if (
        repo.node.name
          .toLowerCase()
          .includes(this.state.searchValue.toLowerCase())
      ) {
        this.reposAfterFilter.push(repo);
      }
    });

    this.setState({
      repositories: this.reposAfterFilter,
    });
  }
  render() {
    return (
      <>
        <div>
          <Input
            className="searchbar"
            placeholder="Find a repository..."
            onChange={(e) => {
              this.SearchRepositories(e.target.value);
            }}
          />
          <Button className="TypeButton">
            Type:&nbsp;<b>All</b>&nbsp;
            <CaretDownOutlined />
          </Button>
          <Button className="LanguageButton">
            Language:&nbsp;<b>All</b>&nbsp;
            <CaretDownOutlined />
          </Button>
          <Button className="NewRepoButton">
            <div className="New">
              <BookOutlined className="bookOutlined" />
              &nbsp;New
            </div>
          </Button>
        </div>
        {this.state.searchValue !== "" ? (
          <div>
            <Divider orientation="left"></Divider>
            <p>
              {this.state.repositories.length} results for repositories
              matching&nbsp;
              <b>{this.state.searchValue}</b>
            </p>
          </div>
        ) : null}

        <RepoList repositories={this.state.repositories} />
      </>
    );
  }
}

export default SearchBar;
