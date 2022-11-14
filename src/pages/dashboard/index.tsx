import React from 'react';
import Top from '@/pages/layouts/Top';
import ToolBars from '@/pages/dashboard/toolbars';

interface Props {}

const Dashboard = (props: Props) => {
  return (
    <>
      <Top />
      <ToolBars />
      <div>报表制作</div>
    </>
  );
};

export default Dashboard;
