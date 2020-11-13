import React from "react";
import "./repoList.css";
import { List, Divider, Button, Space } from "antd";
import { StarOutlined } from "@ant-design/icons";

import moment from "moment";

const IconText = ({ Icon, dot, text }) => {
  if (dot && text) {
    const divStyle = {
      backgroundColor: dot,
    };
    return (
      <Space>
        <span className="dot" style={divStyle}></span>
        {text}
      </Space>
    );
  }
  if (Icon) {
    return (
      <Space>
        {React.createElement(Icon)}
        {text}
      </Space>
    );
  } else {
    return <Space>{text}</Space>;
  }
};

class RepoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  render() {
    return (
      <>
        <Divider orientation="left"></Divider>
        <List
          itemLayout="vertical"
          size="large"
          dataSource={this.props.repositories}
          renderItem={(item) => (
            <>
              <List.Item
                actions={[
                  <IconText
                    Icon={StarOutlined}
                    dot={item.node.languages.edges.map((l) => {
                      return l.node.color;
                    })}
                    text={item.node.languages.edges.map((l) => {
                      return l.node.name;
                    })}
                    key="list-vertical-star-o"
                  />,
                  <IconText
                    text={moment(item.node.updatedAt).fromNow()}
                    key="list-vertical-like-o"
                  />,
                ]}
                extra={
                  <Button>
                    <StarOutlined />
                    &nbsp;Star
                  </Button>
                }
              >
                <List.Item.Meta
                  title={<a href={item.node.url}>{item.node.name}</a>}
                  description={item.node.description}
                />
                <div></div>
              </List.Item>
            </>
          )}
        />
      </>
    );
  }
}

export default RepoList;
