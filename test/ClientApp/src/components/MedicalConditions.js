import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export default class MedicalConditions extends React.Component{
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
                <input
                    name="placeholder1"
                    placeholder="Comments" 
                    value={this.state.placeholder1} 
                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                />
                <br />
                <input
                    name="placeholder2"
                    placeholder="Comments" 
                    value={this.state.placeholder2} 
                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                />
                <br />
                <input
                    name="placeholder3"
                    placeholder="Comments" 
                    value={this.state.placeholder3} 
                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                />
                <br />
                <input
                    name="placeholder4"
                    placeholder="Comments" 
                    value={this.state.placeholder4} 
                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                />
                <br />
                <input
                    name="placeholder5"
                    placeholder="Comments" 
                    value={this.state.placeholder5} 
                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                />
                <br />
                <input
                    name="placeholder6"
                    placeholder="Comments" 
                    value={this.state.placeholder6} 
                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                />
                <br />
                <input
                    name="placeholder7"
                    placeholder="Comments" 
                    value={this.state.placeholder7} 
                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                />
                <br />
                <input
                    name="placeholder8"
                    placeholder="Comments" 
                    value={this.state.placeholder8} 
                    onChange={e => this.change(e)}//setState({ oncologistName: e.target.value})}/> 
                />
                <br />

                                    
                <input id="submit" name="submit" type="submit" value="Update" onclick={() => this.onSubmit()} />

            </form>
        );
    }
}