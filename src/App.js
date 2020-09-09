import React from "react";
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import { CustomCard } from "./components/CustomCard";
import "./App.css";

import {
  Layout,
  Menu,
  Breadcrumb,
  Avatar,
  Input,
  Card,
  Row,
  Col,
  Button,
  PageHeader,
} from "antd";
// import {GitlabOutlined} from "@ant-design/icons";

function App() {
  const { Header, Content, Footer } = Layout;
  const { Search } = Input;

  return (
    <Layout className="layout">
      <Header>
        <Avatar
          className="logo"
          src="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
        ></Avatar>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["0"]}
          style={{ fontSize: "20px" }}
        >
          <Menu.Item key="1">GitHubCompare</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content" style={{overflowY: "auto"}}>
          <Row style={{ paddingBottom: "24px" }}>
            <Col span={8}></Col>
            <Col span={8}>
              <Search
                placeholder="Enter a GitHub username"
                enterButton="Compare"
                size="large"
                onSearch={(value) => console.log(value)}
              />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Card>
                <PageHeader
                  title="Compare 🛠"
                  extra={[
                    <Button key="1" type="primary" style={{ width: "100px" }}>
                      Sort
                    </Button>,
                  ]}
                ></PageHeader>
                <Row gutter="4">
                  <Col span={6}>
                    <CustomCard />
                  </Col>
                  <Col span={6}>
                    <CustomCard />
                  </Col>
                  <Col span={6}>
                    <CustomCard />
                  </Col>
                  <Col span={6}>
                    <CustomCard />
                  </Col>
                  <Col span={6}>
                    <CustomCard />
                  </Col>
                  <Col span={6}>
                    <CustomCard />
                  </Col>
                  <Col span={6}>
                    <CustomCard />
                  </Col>
                  <Col span={6}>
                    <CustomCard />
                  </Col>
                  <Col span={6}>
                    <CustomCard />
                  </Col>
                  <Col span={6}>
                    <CustomCard />
                  </Col>
                  <Col span={6}>
                    <CustomCard />
                  </Col>
                  <Col span={6}>
                    <CustomCard />
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </div>
      </Content>
      <Footer style={{ textAlign: "right" }}>
        Souptik Kumar Saha ©2020 Created by Souptik Kumar Saha
      </Footer>
    </Layout>
  );
}

export default App;
