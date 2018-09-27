import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/Counter';

export default class CancerHistory extends React.Component{
    state = {
        oncologistName: '',
        officeNumber: '',
        officeFax: '',
        officeEmail: '',
        officeAddress: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        country: '',
        typeOfCancerTumor: '',
        dateOfDiagnosis: '',
        ageAtDiagnosis: '',
        stageOfCancerTumor: '',
        statusOfCancerTumor: '',
        placeOfDiagnosis: '',
        treatmentReceived: '',
        dateOfTreatment: '',
        comments: ''
        
    };


    //helps apply changes of all the inputs that render
    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = () => {
        console.log(this.state);
    };

    render(){
        return(
            <form>
                <input
                    name="oncologistName"
                    placeholder="Oncologist's Name" 
                    value={this.state.oncologistName} 
                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                />
                <br />
                <input
                    name="officeNumber"
                    placeholder="Medical Office Phone #" 
                    value={this.state.oncologistName} 
                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                />
                <br />
                <input
                    name="officeFax"
                    placeholder="Office's Fax" 
                    value={this.state.oncologistName} 
                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                />
                <br />
                <input
                    name="officeEmail"
                    placeholder="Office's Email" 
                    value={this.state.oncologistName} 
                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                />
                <br />
                <input
                    name="address"
                    placeholder="Address" 
                    value={this.state.oncologistName} 
                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                />
                <br />
                <input
                    name="city"
                    placeholder="City" 
                    value={this.state.oncologistName} 
                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                />
                <br /> 
                <input
                    name="state"
                    placeholder="State" 
                    value={this.state.oncologistName} 
                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                />
                <br />
                <input
                    name="zipCode"
                    placeholder="Zip Code" 
                    value={this.state.oncologistName} 
                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                />
                <br />
                <input
                    name="country"
                    placeholder="Country" 
                    value={this.state.oncologistName} 
                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                />
                <br />
                <input
                    name="typeOfCancerTumor"
                    placeholder="Enter Type Of Cancer/Tumor" 
                    value={this.state.oncologistName} 
                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                />
                <br />
                <input
                    name="dateOfDiagnosis"
                    placeholder="Date of diagnosis" 
                    value={this.state.oncologistName} 
                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                />
                <br />
                <input
                    name="ageAtDiagnosis"
                    placeholder="Age at Diagnosis" 
                    value={this.state.oncologistName} 
                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                />
                <br />
                <input
                    name="stageOfCancerTumor"
                    placeholder="Current Stage of Cancer/Tumor" 
                    value={this.state.oncologistName} 
                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                />
                <br />
                <input
                    name="statusOfCancerTumor"
                    placeholder="Current Status of Cancer/Tumor" 
                    value={this.state.oncologistName} 
                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                />
                <br />
                <input
                    name="placeOfDiagnosis"
                    placeholder="Place Of Diagnosis" 
                    value={this.state.oncologistName} 
                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                />
                <br />
                <input
                    name="treatmentReceived"
                    placeholder="What treatment did you receive?" 
                    value={this.state.oncologistName} 
                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                />
                <br />
                <input
                    name="dateOfTreatment"
                    placeholder="Date Of Treatment" 
                    value={this.state.oncologistName} 
                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                />
                <br />
                <input
                    name="comments"
                    placeholder="Comments" 
                    value={this.state.oncologistName} 
                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                />
                <br />
                
                
                
                <button onClick={() => this.onSubmit()} /> 
            </form>
        );
    }
}
