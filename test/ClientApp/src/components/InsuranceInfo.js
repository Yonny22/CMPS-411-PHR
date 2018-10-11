import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export default class InsuranceInfo extends React.Component{
    state = {
        primaryInsurance: '',
        phoneNum: '',
        address: '',
        policyIDNum: '',
        groupNum: '',
        planEffectiveDate: '',
        authPhoneNum: '',
        medicareClaimNum: '',
        medicaidClaimNum: '',
        effectiveDate: '',
        polHoldFirstName: '',
        polHoldMidInitial: '',
        polHoldLastNamea: '',
        relationToPolHolder: '',
        polHolderDateOfBirth: '',
        polHolderSSN: '',
        primaryOrSecondary: '',
        
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
                    name="primaryInsurance"
                    placeholder="Insurance Name" 
                    value={this.state.primaryInsurance} 
                    onChange={e => this.change(e)}//setState({ name: e.target.value})}/> 
                />
                <br />
                <input
                    name="phoneNum"
                    placeholder="Phone Number" 
                    value={this.state.phoneNum} 
                    onChange={e => this.change(e)}//setState({ name: e.target.value})}/> 
                />
                <br />
                <input
                    name="address"
                    placeholder="Insurance Address" 
                    value={this.state.address} 
                    onChange={e => this.change(e)}//setState({ name: e.target.value})}/> 
                />
                <br />
                <input
                    name="policyIDNum"
                    placeholder="Policy ID Number" 
                    value={this.state.policyIDNum} 
                    onChange={e => this.change(e)}//setState({ name: e.target.value})}/> 
                />
                <br />
                <input
                    name="groupNum"
                    placeholder="Insurance Group Number" 
                    value={this.state.groupNum} 
                    onChange={e => this.change(e)}//setState({ name: e.target.value})}/> 
                />
                <br />
                <input
                    name="planEffectiveDate"
                    placeholder="Plan Effective Date" 
                    value={this.state.planEffectiveDate} 
                    onChange={e => this.change(e)}//setState({ name: e.target.value})}/> 
                />
                <br />
                <input
                    name="authPhoneNum"
                    placeholder="Authorization Phone Number" 
                    value={this.state.authPhoneNum} 
                    onChange={e => this.change(e)}//setState({ name: e.target.value})}/> 
                />
                <br />
                <input
                    name="medicareClaimNum"
                    placeholder="Medicare Claim Number" 
                    value={this.state.medicareClaimNum} 
                    onChange={e => this.change(e)}//setState({ name: e.target.value})}/> 
                />
                <br />
                <input
                    name="medicaidClaimNum"
                    placeholder="Medicaid CLaim Number" 
                    value={this.state.medicaidClaimNum} 
                    onChange={e => this.change(e)}//setState({ name: e.target.value})}/> 
                />
                <br />
                <input
                    name="effectiveDate"
                    placeholder="Effective Date" 
                    value={this.state.effectiveDate} 
                    onChange={e => this.change(e)}//setState({ name: e.target.value})}/> 
                />
                <br />
                <input
                    name="polHoldFirstName"
                    placeholder="First Name" 
                    value={this.state.polHoldFirstName} 
                    onChange={e => this.change(e)}//setState({ name: e.target.value})}/> 
                />
                <br />
                <input
                    name="polHoldMidInitial"
                    placeholder="M.I." 
                    value={this.state.polHoldMidInitial} 
                    onChange={e => this.change(e)}//setState({ name: e.target.value})}/> 
                />
                <br />
                <input
                    name="polHoldLastNamea"
                    placeholder="Last Name" 
                    value={this.state.polHoldLastNamea} 
                    onChange={e => this.change(e)}//setState({ name: e.target.value})}/> 
                />
                <br />
                <input
                    name="relationToPolHolder"
                    placeholder="Relationship To Holder" 
                    value={this.state.relationToPolHolder} 
                    onChange={e => this.change(e)}//setState({ name: e.target.value})}/> 
                />
                <br />
                <input
                    name="polHolderDateOfBirth"
                    placeholder="Date Of Birth" 
                    value={this.state.polHolderDateOfBirth} 
                    onChange={e => this.change(e)}//setState({ name: e.target.value})}/> 
                />
                <br />
                <input
                    name="polHolderSSN"
                    placeholder="Social Security Number" 
                    value={this.state.polHolderSSN} 
                    onChange={e => this.change(e)}//setState({ name: e.target.value})}/> 
                />
                <br />
                <input
                    name="primaryOrSecondary"
                    placeholder="Primary Or Secondary Insurance" 
                    value={this.state.primaryOrSecondary} 
                    onChange={e => this.change(e)}
                />
               
                <button onClick={() => this.onSubmit()} /> 

            </form>
        );
    }
}