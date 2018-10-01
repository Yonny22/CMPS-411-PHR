import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


export default class Immunizations extends React.Component{
    state = {
        



    };

render(){
        return(
            <form>

                <h1>Add your immunizations here</h1>


                <button>Add Another Immunization</button>
                <button>Save</button>
                <button>View/Edit</button>
                <button>Delete</button>
                <button>Print Summary</button>

            </form>
        );
    }
}
