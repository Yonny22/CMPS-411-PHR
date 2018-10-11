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
        officeState: '',
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
                    value={this.state.officeNumber} 
                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                />
                <br />
                <input
                    name="officeFax"
                    placeholder="Office's Fax" 
                    value={this.state.officeFax} 
                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                />
                <br />
                <input
                    name="officeEmail"
                    placeholder="Office's Email" 
                    value={this.state.officeEmail} 
                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                />
                <br />
                <input
                    name="address"
                    placeholder="Address" 
                    value={this.state.address} 
                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                />
                <br />
                <input
                    name="city"
                    placeholder="City" 
                    value={this.state.city} 
                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                />
                <br /> 
                <input
                    name="officeState"
                    placeholder="Office State" 
                    value={this.state.officeState} 
                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                />
                <br />
                <input
                    name="zipCode"
                    placeholder="Zip Code" 
                    value={this.state.zipCode} 
                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                />
                <br />
                <input
                    name="country"
                    placeholder="Country" 
                    value={this.state.country} 
                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                />
                <br />
                <input
                    name="typeOfCancerTumor"
                    placeholder="Enter Type Of Cancer/Tumor" 
                    value={this.state.typeOfCancerTumor} 
                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                />
                <br />
                <input
                    name="dateOfDiagnosis"
                    placeholder="Date of diagnosis" 
                    value={this.state.dateOfDiagnosis} 
                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                />
                <br />
                <input
                    name="ageAtDiagnosis"
                    placeholder="Age at Diagnosis" 
                    value={this.state.ageAtDiagnosis} 
                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                />
                <br />
                <input
                    name="stageOfCancerTumor"
                    placeholder="Current Stage of Cancer/Tumor" 
                    value={this.state.stageOfCancerTumor} 
                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                />
                <br />
                <input
                    name="statusOfCancerTumor"
                    placeholder="Current Status of Cancer/Tumor" 
                    value={this.state.statusOfCancerTumor} 
                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                />
                <br />
                <input
                    name="placeOfDiagnosis"
                    placeholder="Place Of Diagnosis" 
                    value={this.state.placeOfDiagnosis} 
                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                />
                <br />
                <input
                    name="treatmentReceived"
                    placeholder="What treatment did you receive?" 
                    value={this.state.treatmentReceived} 
                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                />
                <br />
                <input
                    name="dateOfTreatment"
                    placeholder="Date Of Treatment" 
                    value={this.state.dateOfTreatment} 
                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                />
                <br />
                <input
                    name="comments"
                    placeholder="Comments" 
                    value={this.state.comments} 
                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                />
                <br />
                
                
                <input id="submit" name="submit" type="submit" value="Update" onclick={() => this.onSubmit()} />
            </form>
        );
    }
}