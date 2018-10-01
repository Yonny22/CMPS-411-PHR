import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/Counter';

const Counter = props => (
  <div>
    <h1>Medical Card</h1>

    <p>Emergency Med Card for personal usage</p>

    <p>To be carried in wallet with you</p>

    
    <button>CLick Here To Print Out Your Own Emergency Medical Card</button>
    
  </div>
);

export default connect()(Counter);
