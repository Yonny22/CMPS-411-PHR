import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from '../store/WeatherForecasts';

class FetchData extends Component {
  /*componentWillMount() {
    // This method runs when the component is first added to the page
    const startDateIndex = parseInt(this.props.match.params.startDateIndex, 10) || 0;
    this.props.requestWeatherForecasts(startDateIndex);
  }*/

  /*componentWillReceiveProps(nextProps) {
    // This method runs when incoming props (e.g., route params) change
    const startDateIndex = parseInt(nextProps.match.params.startDateIndex, 10) || 0;
    this.props.requestWeatherForecasts(startDateIndex);
  }*/

  render() {
    return (
      <div>
        <h1>Medical History</h1>
            <p>I think we should list cancer/heart/surgical/allergy
                /conditions/womens&mens/eye /ear,nose,mouth,mental/std
                history here
                <ul>
                    <li><a href='/cancerHistory'>Cancer History</a></li>
                    <li><a href='/heartHistory'>Heart History</a> </li>
                    <li><a href='/surgicalHistory'>Surgery History</a></li>
                    <li><a href='/allergyHistory'>Allergy History</a> </li>
                    <li><a href='/medicalConditions'>Medical Conditions</a></li>
                    <li><a href='/womensHistory'>Womens History</a> </li>
                    <li><a href='/mensHistory'>Mens History</a></li>
                    <li><a href='/faceHistory'>Ear, Nose, And Throat</a> </li>
                    <li><a href='/mentalHistory'>Mental History</a> </li>
                    <li><a href='/stdHistory'>STD History</a> </li>
                </ul>

            </p>
            <h1>Immunizations and Exams</h1>
            <p>
                Have another tab for immunizations / exams / past hospital visits
                <ul>
                    <li><a href='/immunizations'>Immunizations</a></li>
                    <li><a href='/exams'>Exams</a> </li>
                    <li><a href='/pastVisits'>History of Hospital Visits</a></li>
                    
                </ul>
            </p>        
      </div>
    );
  }
}

/*function renderForecastsTable(props) {
  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Date</th>
          <th>Temp. (C)</th>
          <th>Temp. (F)</th>
          <th>Summary</th>
        </tr>
      </thead>
      <tbody>
        {props.forecasts.map(forecast =>
          <tr key={forecast.dateFormatted}>
            <td>{forecast.dateFormatted}</td>
            <td>{forecast.temperatureC}</td>
            <td>{forecast.temperatureF}</td>
            <td>{forecast.summary}</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

function renderPagination(props) {
  const prevStartDateIndex = (props.startDateIndex || 0) - 5;
  const nextStartDateIndex = (props.startDateIndex || 0) + 5;

  return <p className='clearfix text-center'>
    <Link className='btn btn-default pull-left' to={`/fetchdata/${prevStartDateIndex}`}>Previous</Link>
    <Link className='btn btn-default pull-right' to={`/fetchdata/${nextStartDateIndex}`}>Next</Link>
    {props.isLoading ? <span>Loading...</span> : []}
  </p>;
}*/

export default connect()(FetchData);
