import React from 'react';
import TOOLBAR_LIST from './config.json';
import { connect } from 'dva';
import MyIcon from '@/pages/components/basicComponents/MyIcon';
import styles from '../index.less';

interface mapMark {}

const ToolBars = (prop: any) => {
  const { dispatch } = prop;

  const addComp = (type: string) => {
    if (!dispatch) return;
    dispatch({
      type: 'report/addComp',
      payload: {
        pp: 'wwwwww',
      },
    });
  };

  return (
    <div className={styles.toolBars}>
      <ul>
        {TOOLBAR_LIST.map(o => (
          <li>
            <MyIcon
              type={o.icon}
              placement="bottom"
              title={o.name}
              onClick={() => addComp(o.type)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default connect()(ToolBars);
