import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export default class ENTHistory extends React.Component{
    state = {
        placeholer1: 'value1',
        placeholer2: 'value2',
        placeholer3: 'value3',
        placeholer4: 'value4',
        placeholer5: 'value5',
        placeholer6: 'value6',
        placeholer7: 'value7',
        placeholer8: 'value8',

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
                    <h1>EAR, NOSE, AND THROAT</h1>
                    <br /> <br />   
                    <table border="1">
                        <h2>Ear</h2>
                    <table width="1000">
                        
                        <tr>
                            <td>Diagnosis:</td>
                            <td>
                                <input
                                    name="EarDiagnosis"
                                    placeholder="Diagnosis"
                                    value={this.state.EarDiagnosis}
                                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                                />
                            </td>
                            <td>
                                <input
                                    name="EarDate"
                                    placeholder="Date of Diagnosis"
                                    value={this.state.EarDate}
                                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                                />
                            </td>
                            <td>
                                <p>
                                    <b>Status:</b> &nbsp;
                                <input type="radio" name="earStatus" value="Active" />
                                    Active &nbsp;&nbsp;
                                <input type="radio" name="earStatus" value="Inactive" />
                                    Inactive &nbsp;&nbsp;
                                <input type="radio" name="earStatus" value="Resolved" />
                                    Resolved &nbsp;&nbsp;
                                <input type="radio" name="earStatus" value="In Remission" />
                                    In Remission &nbsp;&nbsp;
                                </p>
                            </td>
                            <td>
                                <input
                                    name="EarResolved"
                                    placeholder="Date Resolved"
                                    value={this.state.EarResolved}
                                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                                />
                            </td>
                        </tr>

                        <tr>
                            <td>Physician: </td>
                            <td>
                                <input
                                    name="EarPhys"
                                    placeholder="Name"
                                    value={this.state.EarPhys}
                                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                                />
                            </td>
                            <td>
                                <input
                                    name="EarPhysContact"
                                    placeholder="Office # / Email"
                                    value={this.state.EarPhysContact}
                                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                                />
                            </td>
                            <input
                                name="EarPhysLocation"
                                placeholder="Location"
                                value={this.state.EarPhysLocation}
                                onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                            />
                            <td>
                                <input
                                    name="EarPhysComments"
                                    placeholder="Comments"
                                    value={this.state.EarPhysComments}
                                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                                />
                            </td>
                        </tr>

                        <tr>
                            <td>Surgery:</td>
                            <td>
                                <input
                                    name="EarSurgery"
                                    placeholder="Date of Procedure"
                                    value={this.state.EarSurgery}
                                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                                />
                            </td>
                        </tr>

                        <tr>
                            <td>Surgeon:</td>
                            <td>
                                <input
                                    name="EarSurgeon"
                                    placeholder="Name"
                                    value={this.state.EarSurgeon}
                                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                                />
                            </td>
                            <td>
                                <input
                                    name="EarSurgeonContact"
                                    placeholder="Office # / Email"
                                    value={this.state.EarSurgeonContact}
                                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                                />
                            </td>
                            <input
                                name="EarSurgeonFacility"
                                placeholder="Facility Name"
                                value={this.state.EarSurgeonFacility}
                                onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                            />
                            <td>
                                <input
                                    name="EarSurgeonLocation"
                                    placeholder="Location"
                                    value={this.state.EarSurgeonLocation}
                                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                                />
                            </td>
                        </tr>
                    </table>

                    <br /> <br />

                    <h2>Nose</h2>
                    <table width="1000">

                        <tr>
                            <td>Diagnosis:</td>
                            <td>
                                <input
                                    name="NoseDiagnosis"
                                    placeholder="Diagnosis"
                                    value={this.state.NoseDiagnosis}
                                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                                />
                            </td>
                            <td>
                                <input
                                    name="NoseDate"
                                    placeholder="Date of Diagnosis"
                                    value={this.state.NoseDate}
                                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                                />
                            </td>
                            <td>
                                <p>
                                    <b>Status:</b> &nbsp;
                                <input type="radio" name="noseStatus" value="Active" />
                                    Active &nbsp;&nbsp;
                                <input type="radio" name="noseStatus" value="Inactive" />
                                    Inactive &nbsp;&nbsp;
                                <input type="radio" name="noseStatus" value="Resolved" />
                                    Resolved &nbsp;&nbsp;
                                <input type="radio" name="noseStatus" value="In Remission" />
                                    In Remission &nbsp;&nbsp;
                                </p>
                            </td>
                            <td>
                                <input
                                    name="NoseResolved"
                                    placeholder="Date Resolved"
                                    value={this.state.NoseResolved}
                                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                                />
                            </td>
                        </tr>

                        <tr>
                            <td>Physician: </td>
                            <td>
                                <input
                                    name="NosePhys"
                                    placeholder="Name"
                                    value={this.state.NosePhys}
                                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                                />
                            </td>
                            <td>
                                <input
                                    name="NosePhysContact"
                                    placeholder="Office # / Email"
                                    value={this.state.NosePhysContact}
                                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                                />
                            </td>
                            <input
                                name="NosePhysLocation"
                                placeholder="Location"
                                value={this.state.NosePhysLocation}
                                onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                            />
                            <td>
                                <input
                                    name="NosePhysComments"
                                    placeholder="Comments"
                                    value={this.state.NosePhysComments}
                                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                                />
                            </td>
                        </tr>

                        <tr>
                            <td>Surgery:</td>
                            <td>
                                <input
                                    name="NoseSurgery"
                                    placeholder="Date of Procedure"
                                    value={this.state.NoseSurgery}
                                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                                />
                            </td>
                        </tr>

                        <tr>
                            <td>Surgeon:</td>
                            <td>
                                <input
                                    name="NoseSurgeon"
                                    placeholder="Name"
                                    value={this.state.NoseSurgeon}
                                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                                />
                            </td>
                            <td>
                                <input
                                    name="NoseSurgeonContact"
                                    placeholder="Office # / Email"
                                    value={this.state.NoseSurgeonContact}
                                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                                />
                            </td>
                            <input
                                name="NoseSurgeonFacility"
                                placeholder="Facility Name"
                                value={this.state.NoseSurgeonFacility}
                                onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                            />
                            <td>
                                <input
                                    name="NoseSurgeryLocation"
                                    placeholder="Location"
                                    value={this.state.NoseSurgeryLocation}
                                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                                />
                            </td>
                        </tr>
                    </table>

                    <br /> <br />


                    <h2>Throat</h2>
                    <table width="1000">

                        <tr>
                            <td>Diagnosis:</td>
                            <td>
                                <input
                                    name="ThroteDiagnosis"
                                    placeholder="Diagnosis"
                                    value={this.state.ThroatDiagnosis}
                                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                                />
                            </td>
                            <td>
                                <input
                                    name="ThroatDate"
                                    placeholder="Date of Diagnosis"
                                    value={this.state.ThroatDate}
                                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                                />
                            </td>
                            <td>
                                <p>
                                    <b>Status:</b> &nbsp;
                                <input type="radio" name="throatStatus" value="Active" />
                                    Active &nbsp;&nbsp;
                                <input type="radio" name="throatStatus" value="Inactive" />
                                    Inactive &nbsp;&nbsp;
                                <input type="radio" name="throatStatus" value="Resolved" />
                                    Resolved &nbsp;&nbsp;
                                <input type="radio" name="throatStatus" value="In Remission" />
                                    In Remission &nbsp;&nbsp;
                                </p>
                            </td>
                            <td>
                                <input
                                    name="ThroatResolved"
                                    placeholder="Date Resolved"
                                    value={this.state.ThroatResolved}
                                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                                />
                            </td>
                        </tr>

                        <tr>
                            <td>Physician: </td>
                            <td>
                                <input
                                    name="ThroatPhys"
                                    placeholder="Name"
                                    value={this.state.ThroatPhys}
                                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                                />
                            </td>
                            <td>
                                <input
                                    name="ThroatPhysContact"
                                    placeholder="Office # / Email"
                                    value={this.state.ThroatPhysContact}
                                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                                />
                            </td>
                            <input
                                name="ThroatPhysLocation"
                                placeholder="Location"
                                value={this.state.ThroatPhysLocation}
                                onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                            />
                            <td>
                                <input
                                    name="ThroatPhysComments"
                                    placeholder="Comments"
                                    value={this.state.ThroatPhysComments}
                                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                                />
                            </td>
                        </tr>

                        <tr>
                            <td>Surgery:</td>
                            <td>
                                <input
                                    name="ThroatSurgery"
                                    placeholder="Date of Procedure"
                                    value={this.state.ThroatSurgery}
                                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                                />
                            </td>
                        </tr>

                        <tr>
                            <td>Surgeon:</td>
                            <td>
                                <input
                                    name="ThroatSurgeon"
                                    placeholder="Name"
                                    value={this.state.ThroatSurgeon}
                                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                                />
                            </td>
                            <td>
                                <input
                                    name="ThroatSurgeonContact"
                                    placeholder="Office # / Email"
                                    value={this.state.ThroatSurgeonContact}
                                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                                />
                            </td>
                            <input
                                name="ThroatSurgeonFacility"
                                placeholder="Facility Name"
                                //value={this.state.name = "ThroatSurgeonFacility"}
                                value={this.state.ThroatSurgeonFacility}
                                onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                            />
                            <td>
                                <input
                                    name="ThroatSurgeonLocation"
                                    placeholder="Location"
                                    value={this.state.ThroatSurgeonLocation}
                                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                                />
                            </td>
                        </tr>
                        </table>
                    </table>


                </center>
                <br /> <br />  <br /> <br />  
                <input id="submit" name="submit" type="submit" value="Update" onclick={() => this.onSubmit()} />

            </form>
        );
    }
}