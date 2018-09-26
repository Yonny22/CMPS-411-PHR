import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/Counter';

const Counter = props => (
  <div>
    <h1>Medical Card</h1>

    <p>Med Card</p>

    

    
  </div>
);

export default connect(
  state => state.counter,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(Counter);
