import { TRIP } from '../../store/types';

const tripRequest = () => ({
  type: TRIP.TRIP_REQUEST,
});

const tripRequestSuccess = (data) => ({
  type: TRIP.TRIP_SUCCESS,
  payload: {
    data: data,
  },
});

const createTrip = (data) => (dispatch) => {
  dispatch(tripRequest());
  if (data) {
    dispatch(tripRequestSuccess(data));
  }
};

export { createTrip };
