import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/Counter';

const Counter = props => (
  <div>
        <h1>Personal Information</h1>
        <p>Please enter your information to the best of your ability at this current moment:</p>
        <ul>
            <li>Insurance</li>
            <li>Medical Provider</li>
            <li>Family History</li>
            <li>Caregivers</li>
            <li>Legal Documents</li>
            <li>Travel Health</li>
            <li>Risk factors</li>
        </ul>
              
  </div>
);

export default connect(
  state => state.counter,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(Counter);
