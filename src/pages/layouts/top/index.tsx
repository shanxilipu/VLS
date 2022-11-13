import React from 'react';
import MyIcon from '@/pages/components/basicComponents/MyIcon';
import { history } from 'umi';
import styles from '../index.less';

const Top = () => {
  const reHome = () => {
    history.push('./home');
  };

  return (
    <div className={styles.TopStyle}>
      <MyIcon
        className={styles.iconStyle}
        onClick={() => reHome()}
        type="icon-left2"
      />
      <MyIcon
        className={styles.iconStyle}
        onClick={() => reHome()}
        type="icon-user"
      />
    </div>
  );
};

export default Top;
