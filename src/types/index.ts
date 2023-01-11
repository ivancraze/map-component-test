import { LatLngExpression } from 'leaflet';

export interface IPoint {
  name: string;
  coords: ICoordinates;
}

export interface ICoordinates {
  latitude: number;
  longitude: number;
}
export interface IClaim {
  id: number;
  name: string;
  departurePoint: IPoint;
  arrivalPoint: IPoint;
}

export interface IInitialState {
  claims: IClaim[];
  isLoading: false;
  selectedClaim: IClaim | undefined;
  selectedClaimPolyline: LatLngExpression[];
}

export interface ITableColumnsType {
  title: string;
  dataIndex: string;
  key: string;
  className: string;
}

export interface ITableDataType {
  key: number;
  idClaim: number;
  nameClaim: string;
  departurePointName: string;
  arrivalPointName: string;
  departurePoint: IPoint;
  arrivalPoint: IPoint;
}
