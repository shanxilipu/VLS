/*
  打包前
    1:替换iconfont为最新的文件;
    2:修改scriptUrl.
*/
import React from 'react';
import { createFromIconfontCN } from '@ant-design/icons';

interface Props {
  type: string;
}

const MyIconComp = (props: Props) => {
  const { type } = props;
  const MyIcon = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/c/font_3758363_wrk70onn4bi.js', // 在 iconfont.cn 上生成
  });

  return <MyIcon type={type} />;
};

export default MyIconComp;
