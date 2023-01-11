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

  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
  });

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
      router: new L.Routing.OSRMv1({
        profile: 'driving',
      }),
      lineOptions: {
        styles: [
          {
            color: '#DC143C',
            opacity: 1,
            weight: 5,
          },
        ],
        extendToWaypoints: false,
        missingRouteTolerance: 0,
      },
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      draggableWaypoints: false,
      routeWhileDragging: false,
      useZoomParameter: true,
      fitSelectedRoutes: true,
    }).addTo(map);

    return () => {
      map.removeControl(routingControl);
    };
  }, [waypoints]);

  return null;
};

export default RoutingMachine;
