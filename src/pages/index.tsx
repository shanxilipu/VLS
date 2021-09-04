import React from 'react';
import Bar from '@/pages/components/Bar';
import Line from '@/pages/components/Line';
import Pie from '@/pages/components/Pie';
import HBar from '@/pages/components/HBar';

export default () => {
  return (
    <div>
      <Bar/>
      <Line/>
      <Pie/>
      <HBar/>
    </div>
  );
}
