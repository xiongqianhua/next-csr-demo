'use client'
import React from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import ConfigProvider from 'antd/lib/config-provider';
import '@ant-design/v5-patch-for-react-19';
import 'antd/dist/reset.css';
import type { ThemeConfig } from 'antd';
import { useRouter } from 'next/navigation';
const theme: ThemeConfig = {
  token: {
    colorPrimary: '#1890ff',
  },
}

const RootLayout = ({ children }: React.PropsWithChildren) => {
  const router = useRouter();
  return ( <html lang="en">
    <body>
      <AntdRegistry>
        <ConfigProvider theme={theme}>
          {children}
        </ConfigProvider>
      </AntdRegistry>
    </body>
  </html>)
}

export default RootLayout;
