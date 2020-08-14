import React, { Component } from 'react';

class Customer extends Component{
    onDelete = () => {
        this.props.onDelete(this.props.customer.id)
    }
    onEdit = () => {
        this.props.onEdit(this.props.customer)
    }
    render(){
        const { id , first_name , last_name , email } = this.props.customer;
        return  <tr>
        <td data-label="Name">{id}</td>
        <td data-label="Age">{`${first_name} ${last_name}`}</td>
        <td data-label="Job">{email}</td>
        <td>
            <button className="mini ui blue button" onClick={this.onEdit}>Edit</button>
            <button className="mini ui red button" onClick={this.onDelete}>Delete</button>
        </td>
      </tr>
    }
}

export default Customer;