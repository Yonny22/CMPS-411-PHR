import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/Counter';

export default class AllergyHistory extends React.Component{
    state = {
        cardiologist: '',
        officeNumber: '',
        officeFax: '',
        officeEmail: '',
        officeAddress: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        country: '',
        typeOfHeartDisease: '',
        dateOfDiagnosis: '',
        statusOfHeartDisease: '',
        dateResolved: '',
        surgeryProcedure: '',
        dateOfSurgery: '',
        nameOfSurgeon: '',
        surgOfficeNumber: '',
        surgOfficeFax: '',
        surgOfficeEmail: '',
        surgOfficeLocation: '',
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
                    name="cardiologist"
                    placeholder="Cardiologist's Name" 
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
                    name="typeOfHeartDisease"
                    placeholder="Type Of Heart Disease" 
                    value={this.state.oncologistName} 
                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                />
                <br />
                <input
                    name="dateOfDiagnosis"
                    placeholder="When were you diagnosed" 
                    value={this.state.oncologistName} 
                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                />
                <br />
                <input
                    name="statusofHeartDisease"
                    placeholder="What is the status of your heart disease?" 
                    value={this.state.oncologistName} 
                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                />
                <br />
                <input
                    name="dateResolved"
                    placeholder="When was this resolved?" 
                    value={this.state.oncologistName} 
                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                />
                <br />
                <input
                    name="surgeryProcedure"
                    placeholder="What surgery did you have?" 
                    value={this.state.oncologistName} 
                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                />
                <br />
                <input
                    name="dateOfSurgery"
                    placeholder="When did you have this surgery" 
                    value={this.state.oncologistName} 
                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                />
                <br />
                <input
                    name="nameOfSurgeon"
                    placeholder="What is the name of the surgeon?" 
                    value={this.state.oncologistName} 
                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                />
                <br />
                <input
                    name="surgOfficeNumber"
                    placeholder="What is the Surgeon's Medical Office Phone #" 
                    value={this.state.oncologistName} 
                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                />
                <br />
                <input
                    name="surgOfficeFax"
                    placeholder="What is the Surgeon's Office's Fax" 
                    value={this.state.oncologistName} 
                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                />
                <br />
                <input
                    name="surgOfficeEmail"
                    placeholder="What is the surgeon's Office's Email" 
                    value={this.state.oncologistName} 
                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                />
                <br />
                <input
                    name="surgOfficeLoacation"
                    placeholder="What is the address of the surgeons office?" 
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
