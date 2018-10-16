import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actionCreators } from "../store/Counter";
import "./table.css";

export default class FamilyHistory extends React.Component {
  state = {
    familyMember: "",
    firstName: "",
    lastName: "",
    living: "",
    deceased: "",
    causeOfDeath: "",
    comments: ""
  };

  //Will apply changes to all input fields that are rendered
  change = e => {
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
        <input
          name="familyMember"
          placeholder="Family Member"
          value={this.state.familyMember}
          onChange={e => this.change(e)}
        />

        <button onClick={() => this.onSubmit()} />
        <br />
      </form>
    );
  }
}
