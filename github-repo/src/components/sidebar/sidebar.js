import React from "react";
import "./sidebar.css";
import { Avatar } from "antd";
import { UserOutlined, StarOutlined, MailOutlined } from "@ant-design/icons";
import { Button } from "antd";

class Sidebar extends React.Component {
  render() {
    return (
      <aside className="aside aside1">
        <Avatar
          className="profilePicture"
          size={250}
          src={this.props.avatarUrl}
        />
        <h1>{this.props.name}</h1>
        <h2>{this.props.login}</h2>
        <h3>{this.props.bio}</h3>
        <Button className="FollowButton">Follow</Button>
        <Button className="pointsButton">...</Button>
        <br />
        <br />
        <UserOutlined />
        &nbsp;
        <b>{this.props.nbFollowers}</b>&nbsp;followers&nbsp;.&nbsp;
        <b>{this.props.nbFollowing}</b>&nbsp;following&nbsp;.&nbsp;
        <StarOutlined />
        &nbsp;
        <b>{this.props.nbStarredRepositories}</b>
        <br />
        <br />
        <h4>
          <MailOutlined />
          &nbsp;{this.props.email}
        </h4>
      </aside>
    );
  }
}

export default Sidebar;
