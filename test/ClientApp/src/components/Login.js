import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export default class Login extends React.Component{
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
                    <h1>Login</h1>
                    <br /> <br />   
                    <table border="1">
                        <h2>Login</h2>

                        <input
                            name="userName"
                            placeholder="User Name" 
                            value={this.state.userName} 
                            onChange={e => this.change(e)}//setState({ name: e.target.value})}/> 
                        />
                        <input
                            name="password"
                            placeholder="Password" 
                            value={this.state.password} 
                            onChange={e => this.change(e)}//setState({ name: e.target.value})}/> 
                        />


                    </table>
                    <input id="submit" name="submit" type="submit" value="Login" onclick={() => this.onSubmit()} />

                </center>
            </form>
        );
    }
    }