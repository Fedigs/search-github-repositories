import React from "react";
import "./searchBar.css";
import { Input, Button } from "antd";
import { CaretDownOutlined, BookOutlined } from "@ant-design/icons";
class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <Input className="searchbar" placeholder="Find a repository..." />
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
    );
  }
}

export default SearchBar;
