import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Form from '../../component/Form';
import TripSection from '../../component/TripSection';
import Select from '../../component/shared/Select';

import './landingPage.css';
import { createTrip } from './action';
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

  render() {
    return (
      <div className="schedule-form">
        <Form submitHandle={this.submitFrom} />
        <div className="filter-section">
          <Select
            label="Vehicle Type"
            name="vehicleType"
            disabled={false}
            selectHandle={(e) => this.handleSelect(e)}
          />
        </div>
        <TripSection trips={this.props.trips} filter={this.state.filter} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state, 'state');
  return {
    trips: state.trips.tripData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ createTrip }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
