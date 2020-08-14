import React, { Component } from 'react';

class Form extends Component{
    state = {
        form: {first_name : "",last_name : "",email : "", isEdit: false},
        btnName : "Simpan",
        btnClass : "ui violet button submit-button",
    }

    isEmpty(obj){
        return Object.entries(obj).length === 0 && obj.constructor === Object
    }

    componentDidUpdate(prevProps){
        if(prevProps !== this.props && !this.isEmpty(this.props.customer)){
           this.setState(
               {
                   form: {...this.props.customer, isEdit: true},
                   btnName : "Update",
                   btnClass : "ui green button submit-button"
               }
           )
        }
    }

    handleChange = event => {
        const {name, value} = event.target
        let form = this.state.form
        form[name] = value
        this.setState({form})
    }

    onFormSubmit = (event) => {
        event.preventDefault()
        if(this.formValidation()){
           this.props.onFormSubmit(this.state.form)
        }
        // clear form field
        this.clearFormField()
    }

    formValidation = () => {
        if(document.getElementsByName("first_name")[0].value === ""){
            alert("First Name Wajib diisi")
            return false
        }
        if(document.getElementsByName("last_name")[0].value === ""){
            alert("Last Name Wajib diisi")
            return false
        }
        if(document.getElementsByName("email")[0].value === ""){
            alert("email Name Wajib diisi")
            return false
        }
        return true
    }

    clearFormField = () => {
        // change form state
        this.setState({
            form: {first_name : "",last_name : "",email : "",isEdit : false}
        })

        //change button to save
        this.setState({
            btnName : "Simpan",
            btnClass : "ui violet button submit-button"
        })
        // clear form filed
        document.querySelector(".form").reset()

    }

render(){
    return (
        <form class="ui form">
            <div className="ui header">React Laravel CRUD Rest API</div>
            <div className="ui grid">
                <div className="ui five wide column">
                    <div class="field">
                        <label>First Name</label>
                        <input type="text" name="first_name" placeholder="First Name" onChange={this.handleChange} value={this.state.form.first_name} />
                    </div>
                </div>
                <div className="ui five wide column">
                    <div class="field">
                        <label>Last Name</label>
                        <input type="text" name="last_name" placeholder="Last Name" onChange={this.handleChange} value={this.state.form.last_name} />
                    </div>
                </div>
                <div className="ui six wide column">
                    <div class="field">
                        <label>Email</label>
                        <input type="email" name="email" placeholder="Email" onChange={this.handleChange} value={this.state.form.email}/>
                    </div>
                </div>
            </div>
            <br/>
            <button className={this.state.btnClass} onClick={this.onFormSubmit} >{this.state.btnName}</button>
    </form>
        )
    }
}

export default Form;