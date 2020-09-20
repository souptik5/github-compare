import React, { useState } from "react";
import { Card, Descriptions, Typography } from "antd";
import { ShareAltOutlined } from "@ant-design/icons";

export function CustomCard({ userdata, index }) {
  const { Link } = Typography;
  const [data] = useState(userdata);
  return (
    <div style={{ padding: "8px" }} key={index}>
      <Card bordered={true}>
        <Descriptions
          title={`/${data.login}`}
          bordered={true}
          column={1}
          size="small"
        >
          <Descriptions.Item label="Followers: ">
            {data.followers}
          </Descriptions.Item>
          <Descriptions.Item label="Following: ">
            {data.following}
          </Descriptions.Item>
          <Descriptions.Item label="Public Repos: ">
            {data.public_repos}
          </Descriptions.Item>
          <Descriptions.Item label="Public of Gists: ">
            {data.public_gists}
          </Descriptions.Item>
        </Descriptions>
        <Link href={`https://github.com/${data.login}`} target="_blank">
          <ShareAltOutlined />
          Share
        </Link>
      </Card>
    </div>
  );
}
