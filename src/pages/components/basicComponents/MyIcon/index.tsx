/*
  打包前
    1:替换iconfont为最新的文件;
    2:修改scriptUrl.
*/
import React from 'react';
import { Tooltip } from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';

interface Props {
  type: string;
  className?: any;
  title?: string;
  placement?: any;
  [key: string]: any;
}

const MyIconComp = (props: Props) => {
  const { type, className, title, placement, ...otherProps } = props;
  const MyIcon = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/c/font_3758363_ba7azjgdbv.js', // 在 iconfont.cn 上生成
  });
  return (
    <Tooltip placement={placement} title={title}>
      <MyIcon className={className} type={type} {...otherProps} />
    </Tooltip>
  );
};

export default MyIconComp;
