import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CreateNewUser from './CreateNewUser';
import UserList from './UserList';
import ToggleNumberOfGames from './ToggleNumberOfGames';

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
  state = {
  	users: [],
    numberOfGames: '0'
  }

	 handleAddUser = userName => {
            this.setState(prevState => ({ users: [...prevState.users, userName] }));
      };

    handleToggleGameNumber = (showNumber) => {
            if (showNumber) {
                this.setState({numberOfGames: '0'})
            } else {
            	this.setState({numberOfGames: '*/'})
            }
        }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
    	<div>
    	<CreateNewUser onAddUser={this.handleAddUser} />
		<ToggleNumberOfGames onToggleGameNumber={this.handleToggleGameNumber} />
		<UserList users={this.state.users} gameNumber={this.state.numberOfGames} />
    	</div>
      </div>
    );
  }
}

export default App;
