import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/Counter';

export default class HeartHistory extends React.Component{
    state = {
        surgeryProcedure: '',
        surgeryProcedureDate: '',
        surgeonName: '',
        officeNumber: '',
        officeFax: '',
        officeEmail: '',
        facilityName: '',
        facilityLocation: '',
        anesthesiaProblem: '',
        explainProblem: '',
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
                    name="surgeryProcedure"
                    placeholder="Name of surgery" 
                    value={this.state.surgeryProcedure} 
                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                />
                <br />
                <input
                    name="surgeryProcedureDate"
                    placeholder="When did you get the surgery" 
                    value={this.state.surgeryProcedureDate} 
                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                />
                <br />
                <input
                    name="surgeonName"
                    placeholder="Name of surgeon" 
                    value={this.state.surgeonName} 
                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                />
                <br />
                <input
                    name="officeNumber"
                    placeholder="Office # here" 
                    value={this.state.officeNumber} 
                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                />
                <br />
                <input
                    name="officeFax"
                    placeholder="Office fax here" 
                    value={this.state.officeFax} 
                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                />
                <br />
                <input
                    name="officeEmail"
                    placeholder="Office email here" 
                    value={this.state.officeEmail} 
                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                />
                <br />
                <input
                    name="facilityName"
                    placeholder="Name of facility here" 
                    value={this.state.facilityName} 
                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                />
                <br />
                <input
                    name="facilityLocation"
                    placeholder="Facility's location" 
                    value={this.state.facilityLocation} 
                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                />
                <br />
                <input
                    name="anesthesiaProblem"
                    placeholder="Any problems with anesthesia?" 
                    value={this.state.anesthesiaProblem} 
                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                />
                <br />
                <input
                    name="explainProblem"
                    placeholder="If so, explain" 
                    value={this.state.explainProblem} 
                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                />
                <br />
                
                
                
                <button onClick={() => this.onSubmit()} /> 
            </form>
        );
    }
}
