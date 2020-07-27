import { TRIP } from './../../store/types';

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
};

export default function tripReducer(state = initialState, action) {
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
    default:
      return state;
  }
}
