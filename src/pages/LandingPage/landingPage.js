import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Form from '../../component/Form';
import TripSection from '../../component/TripSection';
import Select from '../../component/shared/Select';
import ErrorSection from '../../component/shared/ErrorSection';

import './landingPage.css';
import { createTrip, bookTrip } from './action';
class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: '',
    };
  }
  componentDidMount() {}

  submitFrom = (obj) => {
    this.props.createTrip(obj);
  };

  handleSelect = (e) => {
    this.setState({ filter: e });
  };

  onBookTrip = (event) => {
    this.props.bookTrip(event, this.props.bookedtrip, this.props.trips);
  };

  render() {
    const { showError } = this.props.error;
    return (
      <div className="schedule-form">
        <Form submitHandle={this.submitFrom} />
        {showError ? (
          <ErrorSection errorMsg={this.props.error.message} />
        ) : null}
        <div className="filter-section">
          <Select
            label="Vehicle Type"
            name="vehicleType"
            disabled={false}
            selectHandle={(e) => this.handleSelect(e)}
          />
        </div>

        <TripSection
          trips={this.props.trips}
          booktrip={this.onBookTrip}
          filter={this.state.filter}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    trips: state.trips.tripData,
    bookedtrip: state.trips.bookedtrip,
    error: state.trips.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ createTrip, bookTrip }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
