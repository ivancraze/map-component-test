import { call, put, takeEvery } from 'redux-saga/effects';

import ApiService from '../../services/api';
import { setSelectedClaimPolyline, setSelectedClaim } from '../slices/appSlice';

function* fetchRouteSelection(action) {
  yield put(setSelectedClaim(action.payload));
  const selectedClaim = action.payload;
  const departurePoint = selectedClaim.departurePoint.coords;
  const arrivalPoint = selectedClaim.arrivalPoint.coords;
  const res = yield call(
    ApiService.fetchPolyline,
    departurePoint,
    arrivalPoint,
  );
  yield put(setSelectedClaimPolyline(res.data.routes[0].geometry.coordinates));
}

function* waitFetchRouteSelection() {
  yield takeEvery('saga/setSelectedClaim', fetchRouteSelection);
}

export default waitFetchRouteSelection;
