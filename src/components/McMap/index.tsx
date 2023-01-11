import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

import './index.less';
import 'leaflet/dist/leaflet.css';

import RoutingMachine from './components/RouteMachine';

const McMap: React.FC = () => {
  return (
    <div className="map">
      <MapContainer
        center={[59.984981, 30.345867]}
        zoom={11}
        scrollWheelZoom={false}
        style={{ height: '100vh', width: '100wh' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <RoutingMachine />
      </MapContainer>
    </div>
  );
};

export default McMap;
