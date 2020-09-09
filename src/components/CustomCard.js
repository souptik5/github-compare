import React from "react";
import { Card, Descriptions } from "antd";

export function CustomCard() {
  return (
    <div style={{ padding: "8px" }}>
      <Card  bordered={true}>
        <Descriptions title="souptik5" bordered={true} column={1} size="small">
          <Descriptions.Item label="Followers: ">50</Descriptions.Item>
          <Descriptions.Item label="Following: ">100</Descriptions.Item>
          <Descriptions.Item label="Public Repos: ">36</Descriptions.Item>
          <Descriptions.Item label="Public of Gists: ">12</Descriptions.Item>
        </Descriptions>
      </Card>
    </div>
  );
}
