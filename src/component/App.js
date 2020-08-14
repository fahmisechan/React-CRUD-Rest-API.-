import React, { Component } from 'react';
import axios from 'axios';
import Form from './Form';
import Table from './Table';
import Loader from './Loader';

class App extends Component{
    state = {
        customers : [],
        customer : {},
        url : 'http://localhost:8000/api/customers'
    }

    getCustomers = async () => {
        this.setState({ loader : true })
        const customers = await axios.get(this.state.url)
        this.setState({ customers: customers.data , loader : false })
    }

    deleteCustomer = async (id) => {
        this.setState({ loader : true })
        await axios.delete(`${this.state.url}/${id}`)
        this.getCustomers()
    }
    createCustomer = async (data) => {
        this.setState({ loader : true})
        await axios.post(this.state.url,{
            first_name : data.first_name,
            last_name : data.last_name,
            email : data.email 
        })

        this.getCustomers();
    }

    editCustomer = async (data) => {
        // clear customer object
        this.setState({customer : {}, loader : true})

        await axios.put(`${this.state.url}/${data.id}`, {
            first_name : data.first_name,
            last_name : data.last_name,
            email : data.email
        })

        this.getCustomers()
    }

    componentDidMount(){
        this.getCustomers();
    }

    onDelete = id =>{
        this.deleteCustomer(id)
    }

    onEdit = data => {
        this.setState({customer : data})
    }

    onFormSubmit = (data) => {
        // console.log('data',data)
        if(data.isEdit){
            // if edit is true
            this.editCustomer(data)
        }else{
            // if edit is false
            this.createCustomer(data)
        }
    }

    render(){
        return(
            <div className="ui container">
            <div className="ui secondary pointing menu">
            <a className="active item">
                Home
            </a>
            <a className="item">
                Messages
            </a>
            <a className="item">
                Friends
            </a>
            <div className="right menu">
                <a class="ui item">
                Logout
                </a>
            </div>
            </div>
            <div className="ui segment">
            <div>
            </div>
            <Form customer={this.state.customer} onFormSubmit={this.onFormSubmit} />

            {this.state.loader ? <Loader /> : ''}

            <Table customers={this.state.customers} onDelete={this.onDelete} onEdit={this.onEdit} />

            </div>
            </div>
        )
    }
}

export default App;