'use client'
import React from 'react';
import '@ant-design/v5-patch-for-react-19';
import 'antd/dist/reset.css';
import { Layout, Menu ,theme} from 'antd';
import { useRouter } from 'next/navigation';
const { Header, Content, Footer } = Layout;
import { items } from '@/components/layout/menus';


const RootLayout = ({ children }: React.PropsWithChildren) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const router = useRouter();
  return ( <Layout>
    <Header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div className="demo-logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        items={items}
        style={{ flex: 1, minWidth: 0 }}
        onClick={(key) => {
          const item = items.find((item: any) => item.key === key.key);
          if (item) {
            router.push(item.href);
          }
        }}
      />
    </Header>
    <Content style={{ padding: '0 48px' }}>
      <div
        style={{
          padding: 24,
          minHeight: 380,
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        {children}
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      Ant Design ©{new Date().getFullYear()} Created by Ant UED
    </Footer>
  </Layout> )
}

export default RootLayout;
