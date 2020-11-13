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
          data-testid="avatarUrl"
          className="profilePicture"
          size={250}
          src={this.props.avatarUrl}
        />
        <h1 data-testid="name">{this.props.name}</h1>
        <h2 className="login" data-testid="login">
          {this.props.login}
        </h2>
        <h3 data-testid="bio">{this.props.bio}</h3>
        <Button className="FollowButton">Follow</Button>
        <Button className="pointsButton">...</Button>
        <br />
        <br />
        <UserOutlined />
        &nbsp;
        <b data-testid="nbFollowers">{this.props.nbFollowers}</b>
        &nbsp;followers&nbsp;.&nbsp;
        <b data-testid="nbFollowing">{this.props.nbFollowing}</b>
        &nbsp;following&nbsp;.&nbsp;
        <StarOutlined />
        &nbsp;
        <b data-testid="nbStarredRepositories">
          {this.props.nbStarredRepositories}
        </b>
        <br />
        <br />
        <h4 data-testid="email">
          <MailOutlined />
          &nbsp;{this.props.email}
        </h4>
      </aside>
    );
  }
}

export default Sidebar;
