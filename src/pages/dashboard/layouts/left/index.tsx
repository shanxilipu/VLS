import React from 'react';
import { useIntl, getLocale } from 'umi';
import styles from './index.less';

const DashboardLeft = () => {
  const intl = useIntl();
  console.log(getLocale());
  return (
    <div>
      {' '}
      {intl.formatMessage({
        id: 'test.ppp',
        defaultMessage: '其他',
      })}
    </div>
  );
};

export default DashboardLeft;
