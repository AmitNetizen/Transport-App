import { TRIP, BOOK_TRIP } from './../../store/types';

const initialState = {
  tripData: [
    {
      tripId: 'BTM-CAR-KOROMANGALA',
      empId: 1,
      vehicleType: 'Car',
      vehicleNumber: 'KA-11-1111',
      vacantSeat: 1,
      pickupPoint: 'BTM',
      destination: 'Koromangala',
      pickupTime: '11:11 PM',
    },
    {
      tripId: 'BTM-CAR-INDIRANAGAR',
      empId: 2,
      vehicleType: 'Bike',
      vehicleNumber: 'KA-22-2222',
      vacantSeat: 1,
      pickupPoint: 'BTM',
      destination: 'Indira Nagar',
      pickupTime: '11:11 PM',
    },
  ],
  bookedtrip: [],
  error: {
    message: '',
    showError: false,
  },
};

export default function tripReducer(state = initialState, action) {
  console.log(action, 'action');
  switch (action.type) {
    case TRIP.TRIP_SUCCESS:
      return {
        ...state,
        tripData: [...state.tripData, action.payload.data],
      };
    case TRIP.TRIP_REQUEST:
      return {
        ...state,
      };
    case BOOK_TRIP.BOOK_TRIP_SUCCESS:
      return {
        ...state,
        tripData: state.tripData.map((trip) => {
          console.log(trip, 'trip::trip');
          if (trip.pickupEmpId === action.payload.data.pickupEmpId) {
            trip.vacantSeat = trip.vacantSeat - 1;
          }
          return trip;
        }),
        bookedtrip: [...state.bookedtrip, action.payload.data],
      };
    case BOOK_TRIP.BOOK_TRIP_REQUEST:
      return {
        ...state,
      };
    case BOOK_TRIP.BOOK_TRIP_FAILED:
      return {
        ...state,
        error: {
          ...state.error,
          message: action.payload.data.message,
          showError: action.payload.data.showError,
        },
      };
    default:
      return state;
  }
}
