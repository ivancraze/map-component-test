import { createSlice } from '@reduxjs/toolkit';

import { IInitialState } from '../../types';

const initialState: IInitialState = {
  claims: [
    {
      id: 1,
      name: 'Заявка №1',
      departurePoint: {
        name: 'г. Ижевск, ул. Ленина, д 1',
        coords: {
          latitude: 59.84660399,
          longitude: 30.29496392,
        },
      },
      arrivalPoint: {
        name: 'г. Тамбов, ул Труда, д 1',
        coords: {
          latitude: 59.82934196,
          longitude: 30.42423701,
        },
      },
    },
    {
      id: 2,
      name: 'Заявка №2',
      departurePoint: {
        name: 'г. Воронеж, ул. Ленина, д 2',
        coords: {
          latitude: 59.82934196,
          longitude: 30.42423701,
        },
      },
      arrivalPoint: {
        name: 'г. Москва, ул Шоссе Энтузиастов, д 10',
        coords: {
          latitude: 59.82761295,
          longitude: 30.41705607,
        },
      },
    },
    {
      id: 3,
      name: 'Заявка №3',
      departurePoint: {
        name: 'г. Вологда, ул. Майская, д 1',
        coords: {
          latitude: 59.83567701,
          longitude: 30.38064206,
        },
      },
      arrivalPoint: {
        name: 'г. Екатеринбург, ул Ельцина, д 1',
        coords: {
          latitude: 59.84660399,
          longitude: 30.29496392,
        },
      },
    },
    {
      id: 4,
      name: 'Заявка №4',
      departurePoint: {
        name: 'г. Тамбов, ул. Гагарина, д 62',
        coords: {
          latitude: 59.84660399,
          longitude: 30.29496392,
        },
      },
      arrivalPoint: {
        name: 'г. Самара, ул Вольская, д 30',
        coords: {
          latitude: 59.82761295,
          longitude: 30.41705607,
        },
      },
    },
    {
      id: 5,
      name: 'Заявка №5',
      departurePoint: {
        name: 'г. Липецк, ул. Водопьянова, д 322',
        coords: {
          latitude: 59.83567701,
          longitude: 30.38064206,
        },
      },
      arrivalPoint: {
        name: 'г. Уфа, ул Айская, д 5',
        coords: {
          latitude: 59.84660399,
          longitude: 30.29496392,
        },
      },
    },
  ],
  isLoading: false,
  selectedClaim: undefined,
  selectedClaimPolyline: [],
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setSelectedClaim: (state, action) => {
      state.isLoading = true;
      state.selectedClaim = action.payload;
    },
    setSelectedClaimPolyline: (state, action) => {
      state.selectedClaimPolyline = action.payload;
      state.isLoading = false;
    },
  },
});

export const { setSelectedClaim, setSelectedClaimPolyline } = appSlice.actions;

export default appSlice.reducer;
