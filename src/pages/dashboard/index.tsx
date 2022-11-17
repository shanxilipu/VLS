import React from 'react';
import DashboardTop from '@/pages/dashboard/layouts/top';
import DashboardRight from '@/pages/dashboard/layouts/right';
import DashboardLeft from '@/pages/dashboard/layouts/left';
import styles from './index.less';

interface Props {}

const Dashboard = (props: Props) => {
  return (
    <>
      <div className={styles.dashboardLeft}>
        <DashboardTop />
        <DashboardLeft />
      </div>

      <DashboardRight />
    </>
  );
};

export default Dashboard;
