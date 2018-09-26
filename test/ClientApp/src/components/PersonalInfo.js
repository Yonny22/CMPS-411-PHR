import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/Counter';

const Counter = props => (
  <div>
        <h1>Personal Information</h1>

        <p>Insurancee, Med Providers, Fam History, Caregivers, legal docs, travel health, risk factors
            </p>

    

    
  </div>
);

export default connect(
  state => state.counter,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(Counter);
