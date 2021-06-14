import React from 'react';
import styles from './index.less';
import { Button } from 'antd';

export default () => {
  return (
    <div>
      <h1 className={styles.title}><Button type="primary" >Page index</Button></h1>
    </div>
  );
}
