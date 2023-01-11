import React from 'react';
import { useSelector } from 'react-redux';
import { MapContainer, TileLayer } from 'react-leaflet';
import L, { LatLngExpression } from 'leaflet';

import './index.less';
import 'leaflet/dist/leaflet.css';

import RoutineMachine from './components/RouteMachine';
import { RootState } from '../../store';

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const McMap: React.FC = () => {
  const route = useSelector<RootState, LatLngExpression[]>(
    (state: RootState) => state.main.selectedClaimPolyline,
  );
  console.log(route);
  return (
    <div className="map">
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: '100vh', width: '100wh' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <RoutineMachine />
      </MapContainer>
    </div>
  );
};

export default McMap;
