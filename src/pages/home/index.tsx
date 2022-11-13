import React from 'react';
import styles from './index.less';
import { history } from 'umi';

import homeImg00 from '../../assets/images/homeImg01.png';
import homeImg01 from '../../assets/images/homeImg02.png';
import homeImg02 from '../../assets/images/homeImg03.png';

interface homeProps {}

const imgList = [
  {
    img: homeImg00,
    name: '数据完善',
    url: '/dataSet',
  },
  {
    img: homeImg01,
    name: '报表制作',
    url: '/dashboard',
  },
  {
    img: homeImg02,
    name: '报表列表',
    url: '',
  },
];

const Home = (props: homeProps) => {
  return (
    <div className={styles.homePage}>
      {imgList.map((o: { img: any; name: string; url: string }) => (
        <div
          className={styles.homePageCard}
          onClick={() => {
            history.push(o.url);
          }}
        >
          <img src={o.img} />
          <div className={styles.nameStyle}>{o.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Home;
