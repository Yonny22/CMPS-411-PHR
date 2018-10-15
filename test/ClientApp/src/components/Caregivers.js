import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export default class Caregivers extends React.Component{
    state = {
        HospitalName: 'value1',
        CareName: 'value2',
        CareAddress: 'value3',
        CareNum: 'value4',
        CareEmail: 'value5',
        IfHospital: 'value6',
        HospialName: 'value7',
        HospitalAdd: 'value8',
        HospitalNum: 'value9',
        HospitalEmail: 'value10',
        HospitalComments: 'value11',

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
                    name="PatientName"
                    placeholder="Patients Name" 
                    value={this.state.PatientName} 
                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                />
                <br />
                <input
                    name="CareName"
                    placeholder="Caregiver's Name" 
                    value={this.state.CareName} 
                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                />
                <br />
                <input
                    name="CareAddress"
                    placeholder=" Caregiver Address" 
                    value={this.state.CareAddress} 
                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                />
                <br />
                <input
                    name="CareNum"
                    placeholder="Phone #" 
                    value={this.state.CareNum} 
                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                />
                <br />
                <input
                    name="CareEmail"
                    placeholder="Email" 
                    value={this.state.CareEmail} 
                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                />
                <br />
                <input
                    name="IfHospital"
                    placeholder="Residing Hospuital" 
                    value={this.state.IfHospital} 
                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                />
                <br />
                <input
                    name="HospitalName"
                    placeholder="Hospital Name" 
                    value={this.state.HospitalName} 
                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                />
                <br />
                <input
                    name="HospitalAdd"
                    placeholder="Hospital Address" 
                    value={this.state.HospitalAdd} 
                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                />
                <br />
                <input
                    name="HospitalNum"
                    placeholder="Hospital Phone"
                    value={this.state.HospitalNum}
                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                />
                <br />
                <input
                    name="HospitalEmail"
                    placeholder="Hospital Email"
                    value={this.state.HospitalEmail}
                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                />
                <br />
                <input
                    name="HospitalComments"
                    placeholder="Hospital Comments"
                    value={this.state.HospitalComments}
                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                />
                <br />

                                    
                <input id="submit" name="submit" type="submit" value="Update" onclick={() => this.onSubmit()} />

            </form>
        );
    }
}