import React, { useEffect, useState } from 'react';
import { Chart } from '@antv/g2';


const Bar = () => {
   const fun = () => {
        const data = [
            { type: '未知', value: 654, percent: 0.02 },
            { type: '17 岁以下', value: 654, percent: 0.02 },
            { type: '18-24 岁', value: 4400, percent: 0.2 },
            { type: '25-29 岁', value: 5300, percent: 0.24 },
            { type: '30-39 岁', value: 6200, percent: 0.28 },
            { type: '40-49 岁', value: 3300, percent: 0.14 },
            { type: '50 岁以上', value: 1500, percent: 0.06 },
            ];
        
            const chart = new Chart({
                container: 'container',
                autoFit: true,
                height: 500,
                padding: [5, 2, 5, 2],
              });
              chart.data(data);
              chart.scale('value', {
                alias: '销售额(万)',
              });
              
              chart.axis('type', {
                tickLine: {
                  alignTick: false,
                },
              });
              chart.axis('value', false);
              
              chart.tooltip({
                showMarkers: false,
              });
              chart.interval().position('type*value');
              chart.interaction('element-active');
              
              // 添加文本标注
              data.forEach((item: { type: any; value: any; percent: number; }) => {
                chart
                  .annotation()
                  .text({
                    position: [item.type, item.value],
                    content: item.value,
                    style: {
                      textAlign: 'center',
                    },
                    offsetY: -30,
                  })
                  .text({
                    position: [item.type, item.value],
                    content: (item.percent * 100).toFixed(0) + '%',
                    style: {
                      textAlign: 'center',
                    },
                    offsetY: -12,
                  });
              });
              chart.render();
       }
    
    useEffect(() => {
        fun();
      }, []);

    return (
        <div
           id="container"
           style={{
               width:'300px',
               height: '150px',
           }}
           ></div>
    )
}

export default Bar;