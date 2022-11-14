import React from 'react';
import TOOLBAR_LIST from './config.json';
import MyIcon from '@/pages/components/basicComponents/MyIcon';
import styles from '../index.less';

const ToolBars = () => {
  return (
    <div className={styles.toolBars}>
      <ul>
        {TOOLBAR_LIST.map(o => (
          <li>
            <MyIcon type={o.icon} placement="bottom" title={o.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToolBars;
