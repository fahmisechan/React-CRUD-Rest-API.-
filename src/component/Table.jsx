import React, { Component } from 'react';
import Customer from './Customer';

class Table extends Component{
  onDelete = (id) => {
        this.props.onDelete(id)
  }
  onEdit = (data) => {
    this.props.onEdit(data)
  }
    render(){
      const customers = this.props.customers;
        return( <table class="ui celled table">
        <thead>
          <tr><th>No</th>
          <th>Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr></thead>
        <tbody>
          {
            customers.map(customer => {
              return <Customer
              customer={customer} 
              key={customer.id} 
              onDelete={this.onDelete} 
              onEdit={this.onEdit}
               />
            })
          }
        </tbody>
      </table>
        )
    }
}

export default Table;