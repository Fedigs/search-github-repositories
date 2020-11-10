import React from "react";
import "./repoList.css";
import { List, Divider, Button, Space } from "antd";
import { StarOutlined } from "@ant-design/icons";

const data = [
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 4",
  },
];
const IconText = ({ Icon, text }) => {
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
  render() {
    return (
      <>
        <Divider orientation="left"></Divider>
        <List
          itemLayout="vertical"
          size="large"
          dataSource={data}
          renderItem={(item) => (
            <List.Item
              actions={[
                <IconText
                  Icon={StarOutlined}
                  text="TypeScript"
                  key="list-vertical-star-o"
                />,
                <IconText
                  text="Updated 6 day ago"
                  key="list-vertical-like-o"
                />,
              ]}
              extra={
                <Button>
                  <StarOutlined />
                  &nbsp;Stars
                </Button>
              }
            >
              <List.Item.Meta
                title={<a href="https://ant.design">{item.title}</a>}
                description="Ant Design, a design language for background applications,
                is refined by Ant UED Team"
              />
              <div></div>
            </List.Item>
          )}
        />
      </>
    );
  }
}

export default RepoList;
