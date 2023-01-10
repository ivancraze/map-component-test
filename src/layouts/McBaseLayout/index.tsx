import React from 'react';

import './index.less';

import { Layout } from 'antd';
import { Content } from 'antd/lib/layout/layout';

interface IMcBaseLayoutProps {
  children: React.ReactNode;
}

const McBaseLayout: React.FC<IMcBaseLayoutProps> = ({ children }) => {
  return (
    <Layout className="base-layout">
      <Content className="base-layout__content">{children}</Content>
    </Layout>
  );
};

export default McBaseLayout;
