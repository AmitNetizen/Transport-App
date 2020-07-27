import { TRIP, BOOK_TRIP } from '../../store/types';

const tripRequest = () => ({
  type: TRIP.TRIP_REQUEST,
});

const tripBookRequest = () => ({
  type: BOOK_TRIP.BOOK_TRIP_REQUEST,
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

const tripBookSuccess = (data) => ({
  type: BOOK_TRIP.BOOK_TRIP_SUCCESS,
  payload: {
    data: data,
  },
});

const bookTrip = (data) => (dispatch) => {
  dispatch(tripBookRequest());
  if (data) {
    dispatch(tripBookSuccess(data));
  }
};

export { createTrip, bookTrip };
