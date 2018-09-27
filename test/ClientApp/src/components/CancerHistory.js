import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/Counter';

const Counter = props => (
    <div>
        <h1>History of Cancer</h1>

        <p>You Should Add A New Health Record Here</p>




    </div>
);

export default connect()(Counter);
