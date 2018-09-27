import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/Counter';

const Counter = props => (
  <div>
        <h1>Personal Information</h1>
        <p>Please enter your information to the best of your ability at this current moment:</p>
        <ul>
            <li><a href='/insurance'>Insurance</a></li>
            <li><a href='/medicalProvider'>Medical Provider</a></li>
            <li><a href='/familyHistory'>Family History</a></li>
            <li><a href='/caregivers'>Caregivers</a></li>
            <li><a href='/legalDocuments'>Legal Documents</a></li>
            <li><a href='/travelHealth'>Travel Health</a></li>
            <li><a href='/riskFactors'>Risk factors</a></li>
        </ul>
              
  </div>
);

export default connect(
  state => state.counter,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(Counter);
