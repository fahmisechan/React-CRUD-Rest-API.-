import React, { Component } from 'react';
import SweetAlert from 'sweetalert2-react';

class Sweetalert extends Component{
    state = {
        show : false,
        icon : 'warning'
    }
    render(){
        return(
            <div>
        <button onClick={() => this.setState({ show: true })}>Alert</button>
        <SweetAlert
            show={this.state.show}
            icon = {this.state.icon}
            title = 'Are you sure?'
            text = 'You will not be able to recover this imaginary file!'
            onConfirm={() => this.setState({ show: false })}
        />
    </div>
        )
    }
}

export default Sweetalert;