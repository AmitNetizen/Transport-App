import { combineReducers } from 'redux';

import tripReducer from '../pages/LandingPage/reducer';

const rootreducer = combineReducers({ trip: tripReducer });

export default rootreducer;
