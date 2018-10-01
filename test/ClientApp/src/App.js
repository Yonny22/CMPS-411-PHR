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

import AllergyHistory from './components/AllergyHistory';
import HeartHistory from './components/HeartHistory';
import ENTHistory from './components/ENTHistory';
import MedicalConditions from './components/MedicalConditions';
import MensHealth from './components/MensHealth';
import MentalHealth from './components/MentalHistory';
import STDHistory from './components/STDHistory';
import SurgeryHistory from './components/SurgeryHistory';
import WomensHealth from './components/WomensHealth';

import HospitalAdmit from './components/HospitalAdmit';
import Immunizations from './components/Immunizations';



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

        <Route path='/heartHistory' component ={HeartHistory} />
        <Route path='/surgicalHistory' component ={SurgeryHistory} />
        <Route path='/allergyHistory' component ={AllergyHistory} />
        <Route path='/faceHistory' component ={ENTHistory} />
        <Route path='/mensHistory' component ={MensHealth} />
        <Route path='/mentalHistory' component ={MentalHealth} />
        <Route path='/stdHistory' component ={STDHistory} />
        <Route path='/womensHistory' component ={WomensHealth} />



        <Route path='/pastVisits' component ={HospitalAdmit} />
        <Route path='/immunizations' component ={Immunizations} />
        <Route path='/pastVisits' component ={HospitalAdmit} />


  </Layout>
);
