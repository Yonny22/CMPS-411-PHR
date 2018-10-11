import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export default class FamiltHistory extends React.Component{
    state = {
        placeholer1: '',
        placeholer2: '',
        placeholer3: '',
        placeholer4: '',
        placeholer5: '',
        placeholer6: '',
        placeholer7: '',
        placeholer8: '',

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
                    <h1>Family History</h1>
                    <br /> <br />   
                    <table border="1">
                        <h2>Ear</h2>
                    <table width="1000">
                        
                        <tr>
                            <td>Family Member:</td>
                            <td>
                                <div>
                                    <select
                                        name="familyMember"
                                        value={this.state.title}
                                        onChange={this.handleChange}
                                    >
                                        <option>Acute condition</option>
                                        <option>Annual exam</option>
                                        <option>Chronic condition</option>
                                        <option>Emergency</option>
                                        <option>Follow up visit</option>
                                        <option>Outpatient procedure</option>
                                        <option>Post surgery</option>
                                        <option>Pre surgery</option>
                                        <option>Routine visit</option>
                                        <option>Test/exam</option>
                                        <option>Other:  </option>

                                    </select>
                                </div>
                            </td>
                            <td>
                                <input
                                    name="famMemberFirstName"
                                    placeholder="First Name"
                                    value={this.state.EarDate}
                                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                                />
                            </td>
                            <td>
                                <input
                                    name="famMemberLastName"
                                    placeholder="Last Name"
                                    value={this.state.EarDate}
                                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                                />
                            </td>
                           {/*  <td>
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
                            </td> */}
 
                        </tr>

                        <tr>
                            <td>Disease/Disorder: </td>
                            <td>
                            <div>
                                    <select
                                        name="famDiseaseDisorder"
                                        value={this.state.title}
                                        onChange={this.handleChange}
                                    >
                                        <option>Acute condition</option>
                                        <option>Annual exam</option>
                                        <option>Chronic condition</option>
                                        <option>Emergency</option>
                                        <option>Follow up visit</option>
                                        <option>Outpatient procedure</option>
                                        <option>Post surgery</option>
                                        <option>Pre surgery</option>
                                        <option>Routine visit</option>
                                        <option>Test/exam</option>
                                        <option>Other:  </option>

                                    </select>
                                </div>
                            </td>
                            <td>
                                <p>
                                    <b>Status:</b> &nbsp;
                                <input type="radio" name="relativeStatus" value="Alive" />
                                    Living &nbsp;&nbsp;
                                <input type="radio" name="earStatus" value="Inactive" />
                                    Inactive &nbsp;&nbsp;
                                <input type="radio" name="relativeStatus" value="Deceased" />
                                    Deceased &nbsp;&nbsp;
                                <input type="radio" name="earStatus" value="In Remission" />
                                    In Remission &nbsp;&nbsp;
                                </p>
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

                    </table>


                </center>
                <br /> <br />  <br /> <br />  
                <input id="submit" name="submit" type="submit" value="Update" onclick={() => this.onSubmit()} />

            </form>
        );
    }
}