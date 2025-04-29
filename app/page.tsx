'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from 'antd';
const App: React.FC = () => {
  const router = useRouter();
  return (
    <div>
      <Button onClick={() => router.push('/hmsCloud')}>hmsCloud</Button>
    </div>
  );
};

export default App;
