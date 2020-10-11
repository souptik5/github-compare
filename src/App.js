import React, { useState, useEffect } from "react";
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
  Typography,
} from "antd";
// import {GitlabOutlined} from "@ant-design/icons";

function App() {
  const { Header, Content, Footer } = Layout;
  const { Search } = Input;
  const { Link } = Typography;

  // const [query, setQuery] = useState('');
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState('public_repos'); //for sorting array
  // const [index, setIndex] = useState(0);
  // setData(...[data], {
  //   username: 'souptik5',
  //   followers: '100',
  //   following: '50',
  //   repos: '69',
  //   gists: '42',
  // })
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    // console.log(data);
    let resJson = {};
    const fetchFunc = async () => {
      if (query.length > 0) {
        const response = await fetch(`https://api.github.com/users/${query}`);
        resJson = await response.json();
      }
      // console.log(resJson);
      if (resJson.login) {
        setData((data) => [...data, resJson]);
      }
    };
    const sortArray = type => {
      const types = {
        public_repos: 'public_repos',
        public_gists: 'public_gists',
        followers: 'followers',
        following: 'following',
      };
      const sortProperty = types[type];
      const sorted = [...data].sort((a, b) => b[sortProperty] - a[sortProperty]);
      console.log(sorted);
      setData(sorted);
    };
    sortArray(sortType);
    fetchFunc();
  }, [query, sortType]);

  const resetUsers = () => {
    setData([]);
    setQuery("");
  };

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
        <div className="site-layout-content" style={{ overflowY: "auto" }}>
          <Row style={{ paddingBottom: "24px" }}>
            <Col span={8}></Col>
            <Col span={8}>
              <Search
                placeholder="Enter a GitHub username"
                enterButton="Compare"
                size="large"
                onSearch={(value) => {setQuery(value); setSortType('public_repos');}}
              />
            </Col>
          </Row>
          <Row>
            {data.length > 0 ? (
              <Col span={24}>
                <Card>
                  <PageHeader
                    title="Compare 🛠"
                    extra={[
                      <Button
                        key="1"
                        type="primary"
                        style={{ width: "100px" }}
                        onClick={resetUsers}
                      >
                        Reset
                      </Button>,
                    ]}
                  ></PageHeader>
                  <div className="Data">
                    <Row gutter="4">
                      {data.map((data) => (
                        <Col span={6} key={data.id}>
                          <CustomCard userdata={data} index={data.id} />
                        </Col>
                      ))}
                    </Row>
                  </div>
                </Card>
              </Col>
            ) : (
              <Col span={24}></Col>
            )}
          </Row>
        </div>
      </Content>
      <Footer style={{ textAlign: "right" }}>
        Souptik Kumar Saha ©2020 Created by Souptik Kumar Saha | <Link href={`https://github.com/souptik5`} target="_blank">GitHub</Link>
      </Footer>
    </Layout>
  );
}

export default App;
