
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/Counter';


export default class CancerHistory extends React.Component {
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

    render() {
        return (
           
            <form>

                
                
                <center>
                    <br /><br /><br /><br /><br /><br />
                    <center><h1>EMERGENCY CARD</h1></center>
                    <table border=".5">
                        <table width="1000" >
                        <tr>
                            <td><h2>CONTACT CARD</h2></td>
                            <td><h2>MEDICAL INFO</h2></td>
                        </tr>
                        <tr>
                            <td>
                                FullName:
                                <input
                                name="Name"
                                placeholder="Name"
                                value={this.state.Name}
                                onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                                />
                            </td>
                            <td>
                                <input
                                    name="Allergies"
                                    placeholder="Drug Allergies/Reactions"
                                    value={this.state.Allergies}
                                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                                />
                            </td>
                            <td>
                                <input
                                    name="Reactions"
                                    placeholder="Possible Reactions"
                                    value={this.state.Reactions}
                                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Contact #: 
                                <input
                                name="Phone"
                                placeholder="Phone"
                                value={this.state.Phone}
                                onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                                />
                            </td>
                            <td>
                                <input
                                    name="CurrentMeds"
                                    placeholder="Medications"
                                    value={this.state.CurrentMeds}
                                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                                />
                            </td>
                            <td>
                                <input
                                    name="Dosage"
                                    placeholder="Dosage / Freq"
                                    value={this.state.Dosage}
                                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Address: .
                                <input
                                name="HomeAddress"
                                placeholder="1234 Main St."
                                value={this.state.HomeAddress}
                                onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                                />
                            </td>
                            <td>
                                <input
                                    name="Blood"
                                    placeholder="Blood Type"
                                    value={this.state.Blood}
                                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                                />
                            </td>
                            <td>
                                <input
                                    name="OtherAllergies"
                                    placeholder="Other Allergies"
                                    value={this.state.OtherAllergies}
                                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                                />
                            </td>
                        </tr>
                        </table>
                    
                    <center><h1>IN CASE OF EMERGENCY, CALL THESE PEOPLE IMMEDIATELY</h1></center>
                    <table width="1000">
                        <tr>
                            <td><h2>CONTACT NAME</h2></td>
                            <td><h2>CONTACT NUMBER </h2></td>
                            <td><h2>RELATIONSHIP</h2></td>
                        </tr>
                        <tr>
                            <td>
                                Physician:
                                <input
                                    name="Contact1"
                                    placeholder="Doctor"
                                    value={this.state.Contact1}
                                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                                />
                            </td>
                            <td>
                                <input
                                    name="PhoneContact1"
                                    placeholder="(123) 555-5555"
                                    value={this.state.PhoneContact1}
                                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                                />
                            </td>
                            <td>
                                <input
                                    name="RelationshipContact1"
                                    placeholder="Primary Doctor"
                                    value={this.state.RelContact1}
                                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Contact 1:
                                <input
                                    name="Contact2"
                                    placeholder="Contact2"
                                    value={this.state.Contact2}
                                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                                />
                            </td>
                            <td>
                                <input
                                    name="PhoneContact2"
                                    placeholder="(123) 666-6666"
                                    value={this.state.PhoneContact2}
                                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                                />
                            </td>
                            <td>
                                <input
                                    name="RelationshipContact2"
                                    placeholder="Parent"
                                    value={this.state.RelationshipContact2}
                                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Contact 3:
                                <input
                                    name="Contact3"
                                    placeholder="Contact3"
                                    value={this.state.Contact3}
                                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                                />
                            </td>
                            <td>
                                <input
                                    name="PhoneContact3"
                                    placeholder="(123) 777-7777"
                                    value={this.state.PhoneContact3}
                                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                                />
                            </td>
                            <td>
                                <input
                                    name="RelationshipContact3"
                                    placeholder="Son"
                                    value={this.state.RelationshipContact3}
                                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Contact 4:
                                <input
                                    name="Contact3"
                                    placeholder="Contact3"
                                    value={this.state.Contact3}
                                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                                />
                            </td>
                            <td>
                                <input
                                    name="PhoneContact3"
                                    placeholder="(123) 777-7777"
                                    value={this.state.PhoneContact3}
                                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                                />
                            </td>
                            <td>
                                <input
                                    name="RelationshipContact4"
                                    placeholder="Caregiver"
                                    value={this.state.RelationshipContact4}
                                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                                />
                            </td>
                        </tr>
                    </table>
                
                
                <br />
                <table width="1091">
                        <tr>
                            <td>
                                <p>
                                Living Will: &nbsp;  
                                <input type="radio" name="will" value="yes" />
                                Yes &nbsp;&nbsp;
                                <input type="radio" name="will" value="no" />
                                No
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                Organ Donor: &nbsp;
                                <input type="radio" name="organ" value="yes" />
                                Yes &nbsp;&nbsp;
                                <input type="radio" name="organ" value="no" />
                                No
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                DO NOT RESUSCITATE: &nbsp;
                                <input type="radio" name="dnr" value="yes" />
                                Yes &nbsp;&nbsp;
                                <input type="radio" name="dnr" value="no" />
                                No
                                </p>
                            </td>
                        </tr>
                        </table>
                    </table>
                </center>

                <br />
                <br />

                <input id="submit" name="submit" type="submit" value="Update" onclick={() => this.onSubmit()} />
            
            </form>

           
        );
    }
}