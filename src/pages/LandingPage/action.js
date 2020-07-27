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

const tripBookErrorStatus = (data) => ({
  type: BOOK_TRIP.BOOK_TRIP_FAILED,
  payload: {
    data: data,
  },
});

const checkForbookedTrip = (data, bookedtrip) => {
  return bookedtrip.some((trip) => trip.pickupEmpId === data.pickupEmpId);
};

const bookTrip = (data, bookedtrip) => (dispatch) => {
  dispatch(tripBookRequest());
  const { empId, pickupEmpId } = data;
  if (empId === parseInt(pickupEmpId)) {
    dispatch(
      tripBookErrorStatus({
        showError: true,
        message: 'You can not book the trip',
      })
    );
    setTimeout(() => {
      dispatch(tripBookErrorStatus({ showError: false, message: '' }));
    }, 5000);
  } else if (data.vacantSeat === 0) {
    dispatch(
      tripBookErrorStatus({
        showError: true,
        message: 'No seat left, try another trip',
      })
    );
  } else if (checkForbookedTrip(data, bookedtrip)) {
    dispatch(
      tripBookErrorStatus({
        showError: true,
        message: 'You have already book the trip',
      })
    );
    setTimeout(() => {
      dispatch(tripBookErrorStatus({ showError: false, message: '' }));
    }, 5000);
  } else {
    dispatch(tripBookSuccess(data));
  }
};

export { createTrip, bookTrip };
