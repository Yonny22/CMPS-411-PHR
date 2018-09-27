import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import CreateNewHealthRecord from './components/CreateNewHealthRecord';
import MedHistory from './components/MedHistory';
import MedicalCard from './components/MedicalCard';
import PersonalInfo from './components/PersonalInfo';
import TellAFriend from './components/TellAFriend';
import UploadMedData from './components/UploadMedData';
import CancerHistory from './components/CancerHistory';
import Login from './components/Login';

export default () => (
  <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/createNewHealthRecord' component={CreateNewHealthRecord} />
        <Route path='/medHistory' component={MedHistory} />
        <Route path='/medicalCard' component={MedicalCard} />
        <Route path='/personalInfo' component={PersonalInfo} />
        <Route path='/tellFriend' component={TellAFriend} />
        <Route path='/uploadMedData' component={UploadMedData} />
        <Route path='/cancerHistory' component={CancerHistory} />
        <Route path='/login' component={Login} />
  </Layout>
);
