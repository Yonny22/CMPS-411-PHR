import React from 'react';
import { connect } from 'react-redux';

const Home = props => (
  <div>
    <h1>Welcome to ArchPoint PHR!</h1>
    <p>Here is where you can manage all of your record keeping.</p>
    <ul>
      <li><a href='/createNewHealthRecord'>Create New Record</a></li>
      <li><a href='/accountInfo'>Create an Account</a> </li>
      
    </ul>
    
  </div>
);

export default connect()(Home);
