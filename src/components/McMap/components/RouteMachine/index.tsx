import L from 'leaflet';
import { createControlComponent } from '@react-leaflet/core';

import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';

const createRoute = () => {
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
  });

  return L.Routing.control({
    waypoints: [],
    show: false,
  });
};

const RoutingMachine = createControlComponent(createRoute);

export default RoutingMachine;
