import React from "react";
import { Card, Descriptions, Typography } from "antd";
import { ShareAltOutlined } from "@ant-design/icons";

export function CustomCard() {
  const { Link } = Typography;
  return (
    <div style={{ padding: "8px" }}>
      <Card bordered={true}>
        <Descriptions title="/souptik5" bordered={true} column={1} size="small">
          <Descriptions.Item label="Followers: ">50</Descriptions.Item>
          <Descriptions.Item label="Following: ">100</Descriptions.Item>
          <Descriptions.Item label="Public Repos: ">36</Descriptions.Item>
          <Descriptions.Item label="Public of Gists: ">12</Descriptions.Item>
        </Descriptions>
        <Link href="https://github.com/souptik5" target="_blank">
          <ShareAltOutlined />
          Share
        </Link>
      </Card>
    </div>
  );
}
