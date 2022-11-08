import React from 'react';
import { Scene } from '@antv/l7';
import MyIcon from '@/pages/components/basicComponents/MyIcon';
import { GaodeMap } from '@antv/l7-maps';

const Map = () => {
  const scene = new Scene({
    id: 'map',
    map: new GaodeMap({
      style: 'light',
      center: [109, 33],
      zoom: 4,
    }),
  });

  const renderTool = () => {
    return (
      <div>
        <MyIcon type="icon-plus" />
      </div>
    );
  };

  return (
    <div
      id="map"
      style={{
        position: 'absolute',
        top: '0px',
        width: '100%',
        height: '1000px',
      }}
    />
  );
};

export default Map;
