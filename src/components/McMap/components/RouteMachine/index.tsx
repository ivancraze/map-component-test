import React, { useEffect } from 'react';
import L from 'leaflet';
import { useMap } from 'react-leaflet';
import { useSelector } from 'react-redux';

import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';

import { RootState } from '../../../../store';
import { IClaim } from '../../../../types';

export const RoutingMachine: React.FC = () => {
  const waypoints = useSelector<RootState, IClaim | undefined>(
    (state: RootState) => state.main.selectedClaim,
  );
  const map = useMap();

  useEffect(() => {
    if (!waypoints) return;
    if (!map) return;

    const routingControl = L.Routing.control({
      waypoints: [
        L.latLng(
          waypoints.arrivalPoint.coords.latitude,
          waypoints.arrivalPoint.coords.longitude,
        ),
        L.latLng(
          waypoints.departurePoint.coords.latitude,
          waypoints.departurePoint.coords.longitude,
        ),
      ],
      routeWhileDragging: false,
      useZoomParameter: true,
      addWaypoints: false,
      fitSelectedRoutes: true,
      showAlternatives: false,
    }).addTo(map);

    return () => {
      map.removeControl(routingControl);
    };
  }, [waypoints]);

  return null;
};

export default RoutingMachine;
