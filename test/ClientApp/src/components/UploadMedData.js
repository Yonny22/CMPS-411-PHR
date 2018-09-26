import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/Counter';

const Counter = props => (
  <div>
        <h1>Upload Medical Data Apps</h1>

    <p>Listed as beta in my notes ? last thing well work on?</p>

    

    
  </div>
);

export default connect(
  state => state.counter,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(Counter);
