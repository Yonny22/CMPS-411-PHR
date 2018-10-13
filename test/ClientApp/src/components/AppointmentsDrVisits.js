import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export default class AppointmentsDrVisits extends React.Component{
    state = {
        appointmentDate: '',
        appointmentTime: '',
        amOrPM: '',
        appointmentWith: '',
        firstName: '',
        lastName: '',
        reasonForVisit: '',
        symptomsComplaints: '',
        facilityName: '',
        phoneNum: '',
        faxNum: '',
        email: '',
        location: '',
        comments: '',
        remindMe: '',
        recommendedTreatment: ''
    };

    //helps apply changes of all the inputs that render
    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleChange = event => {
        const isCheckbox = event.target.type === "checkbox";
        this.setState({
          [event.target.name]: isCheckbox
            ? event.target.checked
            : event.target.value
        });
    };

    onSubmit = () => {
        console.log(this.state);
    };


    render(){
        return(
            <form>
                <input
                    name="appointmentDate"
                    placeholder="Appointment Date" 
                    value={this.state.appointmentDate} 
                    onChange={e => this.change(e)}//setState({ name: e.target.value})}/> 
                />
                <br />
                <input
                    name="appointmentTime"
                    placeholder="Appointment Time" 
                    value={this.state.appointmentTime} 
                    onChange={e => this.change(e)}//setState({ name: e.target.value})}/> 
                />
                <br />
                <input
                    name="amOrPM"
                    placeholder="Am/PM" 
                    value={this.state.amOrPM} 
                    onChange={e => this.change(e)}//setState({ name: e.target.value})}/> 
                />
                <br />
                <input
                    name="appointmentWith"
                    placeholder="Appointment With" 
                    value={this.state.appointmentWith} 
                    onChange={e => this.change(e)}//setState({ name: e.target.value})}/> 
                />
                <br />
                <input
                    name="firstName"
                    placeholder="First Name" 
                    value={this.state.firstName} 
                    onChange={e => this.change(e)}//setState({ name: e.target.value})}/> 
                />
                <br />
                <input
                    name="lastName"
                    placeholder="Last Name" 
                    value={this.state.lastName} 
                    onChange={e => this.change(e)}//setState({ name: e.target.value})}/> 
                />
                <br />
                <div>
                    <select
                        name="reasonForVisit"
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
                <br />
                <div>
                    <select
                        name="symptomsComplaints"
                        value={this.state.title}
                        onChange={this.handleChange}
                    >
                        <option>Abdominal pain </option>
                        <option>Abnormal bleeding</option>
                        <option>Acid reflux</option>
                        <option>Allergies</option>
                        <option>Anxiety</option>
                        <option>Arthritis</option>
                        <option>Asthma</option>
                        <option>Back pain</option>
                        <option>Blood in stool</option>
                        <option>Blood in urine	</option>
                        <option>Breast lump(s)</option>
                        <option>Bronchitis </option>
                        <option>Chest congestion</option>
                        <option>Chest pain</option>
                        <option>Constant fatigue</option>
                        <option>Constant pain</option>
                        <option>Constipation (frequent)	</option>
                        <option>Coughing up blood</option>
                        <option>Coughing/wheezing</option>
                        <option>Depression </option>
                        <option>Diarrhea/ frequent</option>
                        <option>Difficulty breathing</option>
                        <option>Difficulty swallowing</option>
                        <option>Difficulty walking</option>
                        <option>Dizziness</option>
                        <option>Double vision </option>
                        <option>Earache</option>
                        <option>Erectile dysfunction </option>
                        <option>Excessive thirst</option>
                        <option>Eye injury</option>
                        <option>Eye pain</option>
                        <option>Fainting</option>
                        <option>Fever, persistent</option>
                        <option>Headaches (constant/severe) </option>
                        <option>Hearing loss</option>
                        <option>Heartburn (frequent) </option>
                        <option>Heart pain</option>
                        <option>High blood pressure</option>
                        <option>High cholesterol</option>
                        <option>Hoarseness (loss of voice)</option>
                        <option>Incontinence</option>
                        <option>Indigestion (frequent)</option>
                        <option>Infertility</option>
                        <option>Ingrown nail</option>
                        <option>Ingrown nail</option>
                        <option>Joint pain select  → (ankle)(elbow) (finger) (hip) (wrist)  </option>
                        <option>Knee pain</option>
                        <option>Leg cramps</option>
                        <option>Leg pain</option>
                        <option>Loss of appetite</option>
                        <option>Memory loss</option>
                        <option>Muscle aches</option>
                        <option>Nausea/vomiting</option>
                        <option>Neck pain</option>
                        <option>Nipple discharge</option>
                        <option>Nosebleeds (frequent)	</option>
                        <option>Pelvic pain (chronic)</option>
                        <option>Penile discharge</option>
                        <option>Problem with sex</option>
                        <option>Rectal bleeding</option>
                        <option>Seizures</option>
                        <option>Sexual disease (STD)</option>
                        <option>Sinus problem (chronic)	</option>
                        <option>Shortness of breath</option>
                        <option>Shoulder pain</option>
                        <option>Skin rash</option>
                        <option>Sleeping difficulty</option>
                        <option>Sore throat</option>
                        <option>Sprain/fracture</option>
                        <option>Stomach pain</option>
                        <option>Swelling select  → (ankle) (feet)  (hand)(leg)</option>
                        <option>Tendonitis</option>
                        <option>Tinnitus (ringing in ear)</option>
                        <option>Urination problem</option>
                        <option>Vaginal discharge</option>
                        <option>Vertigo</option>
                        <option>Vision problem</option>
                        <option>Vomiting</option>
                        <option>Vomiting of blood</option>
                        <option>Warts</option>
                        <option>Weight gain</option>
                        <option>Weight loss</option>
                        <option>Other:  </option>


                    </select>
                </div>

                <input
                    name="facilityName"
                    placeholder="Facility Name" 
                    value={this.state.facilityName} 
                    onChange={e => this.change(e)}//setState({ name: e.target.value})}/> 
                />
                <br />
                <input
                    name="phoneNum"
                    placeholder="Phone No" 
                    value={this.state.phoneNum} 
                    onChange={e => this.change(e)}//setState({ name: e.target.value})}/> 
                />
                <br />
                <input
                    name="faxNum"
                    placeholder="Fax No" 
                    value={this.state.faxNum} 
                    onChange={e => this.change(e)}//setState({ name: e.target.value})}/> 
                />
                <br />
                <input
                    name="email"
                    placeholder="Email" 
                    value={this.state.email} 
                    onChange={e => this.change(e)}//setState({ name: e.target.value})}/> 
                />
                <br />
                <input
                    name="location"
                    placeholder="Location" 
                    value={this.state.location} 
                    onChange={e => this.change(e)}//setState({ name: e.target.value})}/> 
                />
                <br />
                <input
                    name="comments"
                    placeholder="Comments" 
                    value={this.state.comments} 
                    onChange={e => this.change(e)}//setState({ name: e.target.value})}/> 
                />
                <br />
                <input
                    name="remindMe"
                    placeholder="Remind Me?" 
                    value={this.state.remindMe} 
                    onChange={e => this.change(e)}//setState({ name: e.target.value})}/> 
                />
                <br />
                <br />

                <div>
                    <select
                        name="recommendedTreatment"
                        value={this.state.title}
                        onChange={this.handleChange}
                    >
                        <option>Admitted to hospital</option>
                        <option>Dialysis</option>
                        <option>Diet change	</option>
                        <option>Follow up visit required</option>
                        <option>Weight loss</option>
                        <option>Medication change</option>
                        <option>Medication prescribed</option>
                        <option>Patient discharged</option>
                        <option>Physical therapy</option>
                        <option>Referred to specialist</option>
                        <option>Rest</option>
                        <option>Referred for second opinion</option>
                        <option>Referred for screening/testing</option>
                        <option>Surgery recommended</option>
                        <option>Therapy prescribed</option>
                        <option>Other:  </option>


                    </select>
                </div>

                                    
                <button onClick={() => this.onSubmit()} /> 


            


            </form>
        );
    }
}