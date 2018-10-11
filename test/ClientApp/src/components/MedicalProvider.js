import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export default class MedicalProvider extends React.Component{
    state = {
        primaryPhysician: '',
        primaryPhysActiveOrInactive: '',
        primaryPhysFirstName: '',
        primaryPhysLastName: '',
        primaryPhysTypeOfSpecialty: '',
        primaryPhysAddress: '',
        primaryPhysCity: '',
        primaryPhysStateProvince: '',
        primaryPhysCountry: '',
        primaryPhysPhoneNum: '',
        primaryPhysEmail: '',

        activeOrInactive: '',
        firstName: '',
        lastName: '',
        typeOfSpecialty: '',
        physAddress: '',
        physCity: '',
        physStateProvince: '',
        physCountry: '',
        physPhoneNum: '',
        physEmail: '',

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
                <p>Please enter your primary care provider:</p>
                <input
                    name="primaryPhysician"
                    placeholder="Physician/Specialist" 
                    value={this.state.primaryPhysician} 
                    onChange={e => this.change(e)}//setState({ name: e.target.value})}/> 
                />
                <br />
                <input
                    name="primaryPhysActiveOrInactive"
                    placeholder="Active or Inactive Checkbox" 
                    value={this.state.primaryPhysActiveOrInactive} 
                    onChange={e => this.change(e)}//setState({ name: e.target.value})}/> 
                />
                <br />
                <input
                    name="primaryPhysFirstName"
                    placeholder="First Name" 
                    value={this.state.primaryPhysFirstName} 
                    onChange={e => this.change(e)}//setState({ name: e.target.value})}/> 
                />
                <br />
                <input
                    name="primaryPhysLastName"
                    placeholder="Last Name" 
                    value={this.state.primaryPhysLastName} 
                    onChange={e => this.change(e)}//setState({ name: e.target.value})}/> 
                />
                <br />
                <input
                    name="primaryPhysTypeOfSpecialty"
                    placeholder="Type Of Specialty Dropdown" 
                    value={this.state.primaryPhysTypeOfSpecialty} 
                    onChange={e => this.change(e)}//setState({ name: e.target.value})}/> 
                />
                <br />
                <input
                    name="primaryPhysAddress"
                    placeholder="Address" 
                    value={this.state.primaryPhysAddress} 
                    onChange={e => this.change(e)}//setState({ name: e.target.value})}/> 
                />
                <br />
                <input
                    name="primaryPhysCity"
                    placeholder="City" 
                    value={this.state.primaryPhysCity} 
                    onChange={e => this.change(e)}//setState({ name: e.target.value})}/> 
                />
                <br />
                <input
                    name="primaryPhysStateProvince"
                    placeholder="State/Province" 
                    value={this.state.primaryPhysStateProvince} 
                    onChange={e => this.change(e)}//setState({ name: e.target.value})}/> 
                />
                <br />
                <input
                    name="primaryPhysCountry"
                    placeholder="Country" 
                    value={this.state.primaryPhysCountry} 
                    onChange={e => this.change(e)}//setState({ name: e.target.value})}/> 
                />
                <br />
                <input
                    name="primaryPhysPhoneNum"
                    placeholder="Phone Num" 
                    value={this.state.primaryPhysPhoneNum} 
                    onChange={e => this.change(e)}//setState({ name: e.target.value})}/> 
                />
                <br />
                <input
                    name="primaryPhysEmail"
                    placeholder="Email" 
                    value={this.state.primaryPhysEmail} 
                    onChange={e => this.change(e)}//setState({ name: e.target.value})}/> 
                />
                <br />

                <br />
                <br />

                <p>Please enter other Physicians/Providers</p>
                <input
                    name="activeOrInactive"
                    placeholder="Active or Inactive Checkbox" 
                    value={this.state.activeOrInactive} 
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
                <input
                    name="typeOfSpecialty"
                    placeholder="Type Of Specialty" 
                    value={this.state.typeOfSpecialty} 
                    onChange={e => this.change(e)}//setState({ name: e.target.value})}/> 
                />
                <br />
                <input
                    name="physAddress"
                    placeholder="Address" 
                    value={this.state.physAddress} 
                    onChange={e => this.change(e)}//setState({ name: e.target.value})}/> 
                />
                <br /><input
                    name="physCity"
                    placeholder="City" 
                    value={this.state.physCity} 
                    onChange={e => this.change(e)}//setState({ name: e.target.value})}/> 
                />
                <br /><input
                    name="physStateProvince"
                    placeholder="State/Province" 
                    value={this.state.physStateProvince} 
                    onChange={e => this.change(e)}//setState({ name: e.target.value})}/> 
                />
                <br /><input
                    name="physCountry"
                    placeholder="Country" 
                    value={this.state.physCountry} 
                    onChange={e => this.change(e)}//setState({ name: e.target.value})}/> 
                />
                <br /><input
                    name="physPhoneNum"
                    placeholder="Physician Phone No" 
                    value={this.state.physPhoneNum} 
                    onChange={e => this.change(e)}//setState({ name: e.target.value})}/> 
                />
                <br /><input
                    name="physEmail"
                    placeholder="Physician Email" 
                    value={this.state.physEmail} 
                    onChange={e => this.change(e)}//setState({ name: e.target.value})}/> 
                />
                <br />

                                    
                <button onClick={() => this.onSubmit()} /> 

            </form>
        );
    }
}