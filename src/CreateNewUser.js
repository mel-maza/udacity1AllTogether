import React, { Component } from 'react';

class CreateNewUser extends Component {
  	state = {
    	firstName: '',
      	lastName: '',
      	userName: '',
    }

	addUser = event => {
    event.preventDefault();
    this.props.onAddUser(this.state.userName);
}

	handleChange = event => {
      event.target.name === 'FirstName' && (
       this.setState({
    	firstName: event.target.value}));
      event.target.name === 'LastName' && (
       this.setState({
    	lastName: event.target.value}));
      event.target.name === 'UserName' && (
       this.setState({
    	userName: event.target.value}))
    }

	inputNotComplete = () => {
        return ( 
          (this.state.firstName === '') ||
          (this.state.lastName === '') ||
          (this.state.userName === '')
        )
    };

	render() {
    	return (
        	<form onSubmit={this.addUser}>
				<input type='text' placeholder='First Name' value={this.state.firstName} name='FirstName' onChange={this.handleChange} />
				<input type='text' placeholder='Last Name' value={this.state.lastName} name='LastName' onChange={this.handleChange} />
				<input type='text' placeholder='UserName' value={this.state.userName} name='UserName' onChange={this.handleChange} />
				<button disabled={this.inputNotComplete()}>Add</button>
			</form>
        )
    }
}

export default CreateNewUser