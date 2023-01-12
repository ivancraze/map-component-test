import axios from 'axios';

import { ROUTE_API_URL } from '@app/constants';
import { ICoordinates } from '@app/types';

export default class ApiService {
  static async fetchPolyline(startPoint: ICoordinates, endPoint: ICoordinates) {
    try {
      return await axios.get(
        `${ROUTE_API_URL}${startPoint.latitude},${startPoint.longitude};${endPoint.latitude},${endPoint.longitude}?geometries=geojson`,
      );
    } catch (e) {
      console.log(e);
    }
  }
}
