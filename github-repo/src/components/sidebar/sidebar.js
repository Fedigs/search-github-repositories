import React from "react";
import "./sidebar.css";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Button } from "antd";

class Sidebar extends React.Component {
  render() {
    return (
      <aside className="aside aside1">
        <Avatar className="profilePicture" size={250} icon={<UserOutlined />} />
        <h1>Fedi Guesmi</h1>
        <h2>Fedigs</h2>
        <h3>Lorem ipsum dolor sit amet consectetur</h3>
        <Button className="FollowButton">Follow</Button>
        <Button className="pointsButton">...</Button>
      </aside>
    );
  }
}

export default Sidebar;
