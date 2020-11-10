import React from "react";
import "./header.css";

import { Menu } from "antd";
import { ReadOutlined, BookOutlined, ProjectOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;
class Header extends React.Component {
  state = {
    current: "Repositories",
  };

  handleClick = (e) => {
    console.log("click ", e);
    this.setState({ current: e.key });
  };
  render() {
    const { current } = this.state;
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[current]}
        mode="horizontal"
      >
        <Menu.Item key="Overview" icon={<ReadOutlined />}>
          Overview
        </Menu.Item>
        <Menu.Item key="Repositories" icon={<BookOutlined />}>
          Repositories
        </Menu.Item>
        <Menu.Item key="Projects" icon={<ProjectOutlined />}>
          Projects
        </Menu.Item>
      </Menu>
    );
  }
}

export default Header;
