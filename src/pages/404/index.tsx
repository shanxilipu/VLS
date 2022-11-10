import React from 'react';
import tentIcon from '@/assets/images/tent.svg';
import notIcon from '@/assets/images/404.svg';
import styles from './index.less';

export default () => {
  return (
    <div className={styles.iconStyle}>
      <img src={notIcon} />
      <img src={tentIcon} />
    </div>
  );
};
