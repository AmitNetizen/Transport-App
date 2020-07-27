import { combineReducers } from 'redux';

import tripReducer from '../pages/LandingPage/reducer';

const rootreducer = combineReducers({ trips: tripReducer });

export default rootreducer;
