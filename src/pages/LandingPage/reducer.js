import { TRIP } from './../../store/types';

const initialState = {
  trips: [],
};

export default function tripReducer(state = initialState, action) {
  switch (action.type) {
    case TRIP.TRIP_SUCCESS:
      return {
        ...state,
        tripData: action.payload.data,
      };
    case TRIP.TRIP_FAILED:
      return {
        ...state,
        tripData: action.payload,
      };
    case TRIP.TRIP_REQUEST:
      return {
        ...state,
      };
    default:
      return state;
  }
}
