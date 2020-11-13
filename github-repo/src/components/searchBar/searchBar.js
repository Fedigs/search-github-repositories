import React from "react";
import "./searchBar.css";
import RepoList from "../repoList/repoList";
import { Input, Button, Divider } from "antd";
import {
  CaretDownOutlined,
  BookOutlined,
  CloseSquareFilled,
} from "@ant-design/icons";
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
  get_repositories() {
    //get repositories data from repositories service
    get_All_Repositories()
      .then((res) => {
        this.setState({
          repositories: res.data.data.repositoryOwner.repositories.edges,
        });
        this.repos = res.data.data.repositoryOwner.repositories.edges;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  componentDidMount() {
    this.get_repositories();
  }
  //function to filter repositories by name
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
  clearFilter() {
    document.location.reload();
  }
  render() {
    return (
      <>
        <div>
          <Input
            id="searchbar"
            className="searchbar"
            data-testid="searchbar"
            placeholder="Find a repository..."
            onChange={(e) => {
              this.SearchRepositories(e.target.value);
            }}
          />
          <Button className="TypeButton" data-testid="TypeButton">
            Type:&nbsp;<b>All</b>&nbsp;
            <CaretDownOutlined />
          </Button>
          <Button className="LanguageButton" data-testid="LanguageButton">
            Language:&nbsp;<b>All</b>&nbsp;
            <CaretDownOutlined />
          </Button>
          <Button className="NewRepoButton" data-testid="NewRepoButton">
            <div className="New">
              <BookOutlined className="bookOutlined" />
              &nbsp;New
            </div>
          </Button>
        </div>
        {this.state.searchValue !== "" ? (
          <div>
            <Divider orientation="left"></Divider>
            <div className="filterResult">
              <div className="filterResultText">
                {this.state.repositories.length} results for repositories
                matching&nbsp;
                <b>{this.state.searchValue}</b>
              </div>
              <div>
                <p className="clearFilter" onClick={() => this.clearFilter()}>
                  <CloseSquareFilled /> clear Filter
                </p>
              </div>
            </div>
          </div>
        ) : null}

        <RepoList
          data-testid="RepoList"
          repositories={this.state.repositories}
        />
      </>
    );
  }
}

export default SearchBar;
