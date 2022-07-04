import { Layout } from 'antd';
import React, { ReactElement } from 'react';
import Sidebar from 'elements/Sidebar';
import Mainbar from 'elements/Mainbar';

const Home = (): ReactElement => {
  return (
    <Layout>
      <Sidebar />
      <Mainbar />
    </Layout>
  );
};

export default Home;
