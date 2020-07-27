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

const checkForbookedTrip = (data, bookedtrip, trips, dispatch) => {
  const isPresentInBookedTrip = bookedtrip.some(
    (trip) => trip.pickupEmpId === data.pickupEmpId
  );
  const isPresentInOtherTrip = trips.some(
    (trip) => trip.pickupEmpId === data.pickupEmpId
  );

  if (isPresentInBookedTrip) {
    dispatch(
      tripBookErrorStatus({
        showError: true,
        message: 'You have already book the trip',
      })
    );
  } else if (isPresentInOtherTrip) {
    dispatch(
      tripBookErrorStatus({
        showError: true,
        message:
          'You are not allowed to book a trip as you already have created a  trip on you EMP Id',
      })
    );
  }

  return isPresentInBookedTrip || isPresentInOtherTrip ? true : false;
};

const bookTrip = (data, bookedtrip, trips) => (dispatch) => {
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
  } else if (checkForbookedTrip(data, bookedtrip, trips, dispatch)) {
    setTimeout(() => {
      dispatch(tripBookErrorStatus({ showError: false, message: '' }));
    }, 5000);
  } else {
    dispatch(tripBookSuccess(data));
  }
};

export { createTrip, bookTrip };
