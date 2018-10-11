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
                <center>
                    <br />
                    <h1>Cancer History</h1>
                    <br /> <br />
                    <table border = "1">
                     <table height="300">
                            <tr>
                                <td>Oncologist Info:</td>
                            <td>
                                <input
                                    name="oncologistName"
                                    placeholder="Oncologist's Name"
                                    value={this.state.oncologistName}
                                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                                    />
                                    &nbsp;
                            </td>
                            <td>
                                <input
                                    name="officeNumber"
                                    placeholder="Medical Office Phone #"
                                    value={this.state.officeNumber}
                                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                                    />
                                    &nbsp;
                            </td>
                            <td>
                                <input
                                    name="officeFax"
                                    placeholder="Office's Fax"
                                    value={this.state.officeFax}
                                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                                    />
                                    &nbsp;
                            </td>

                            <td>
                                <input
                                    name="officeEmail"
                                    placeholder="Office's Email"
                                    value={this.state.officeEmail}
                                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                                    />
                                    &nbsp;
                            </td>

                            <td>
                                <input
                                    name="address"
                                    placeholder="Address"
                                    value={this.state.address}
                                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                                    />
                                    &nbsp;
                            </td>

                        </tr>

                            <tr>
                                <td>Cancer Diagnosis:</td>
                            <td>
                                <input
                                    name="typeOfCancerTumor"
                                    placeholder="Enter Type Of Cancer/Tumor"
                                    value={this.state.typeOfCancerTumor}
                                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                                    />
                                    &nbsp;
                            </td>
                            <td>
                                <input
                                    name="dateOfDiagnosis"
                                    placeholder="Date of diagnosis"
                                    value={this.state.dateOfDiagnosis}
                                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                                    />
                                    &nbsp;
                            </td>
                            <td>
                                <input
                                    name="ageAtDiagnosis"
                                    placeholder="Age at Diagnosis"
                                    value={this.state.ageAtDiagnosis}
                                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                                    />
                                    &nbsp;
                            </td>
                            <td>
                                <input
                                    name="placeOfDiagnosis"
                                    placeholder="Place Of Diagnosis"
                                    value={this.state.placeOfDiagnosis}
                                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                                    />
                                    &nbsp;
                            </td>
                            <td>
                                <p>
                                    <b>Status:</b> &nbsp;
                                <input type="radio" name="CancerStatus" value="Active" />
                                    Active &nbsp;&nbsp;
                                <input type="radio" name="CancerStatus" value="Removed" />
                                    Removed &nbsp;&nbsp;
                                <input type="radio" name="CancerStatus" value="In Remission" />
                                    In Remission &nbsp;&nbsp;
                                </p>
                            </td>
                        </tr>

                            <tr>
                                <td>Cancer Treatment:</td>
                            <td>
                                <input
                                    name="treatmentReceived"
                                        placeholder="What treatment did you receive?"
                                    value={this.state.treatmentReceived}
                                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                                    />
                                    &nbsp;
                            </td>
                            <td>
                                <input
                                    name="dateOfTreatment"
                                    placeholder="Date Of Treatment"
                                    value={this.state.dateOfTreatment}
                                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                                    />
                                    &nbsp;
                            </td>
                            <td>
                                <input
                                    name="comments"
                                    placeholder="Comments"
                                    value={this.state.comments}
                                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                                    />
                                    &nbsp;
                            </td>
                        </tr>
                        </table>
                        </table>
                </center>

                
                <br /> <br /> <br />
                <br />
                
                
                <input id="submit" name="submit" type="submit" value="Update" onclick={() => this.onSubmit()} />
            </form>
        );
    }
}