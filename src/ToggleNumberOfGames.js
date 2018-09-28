import React, { Component } from 'react';

class ToggleNumberOfGames extends Component {
  	state = {
    	showNumber: false ,
      	buttonText: 'Hide the Number of Games Played'
    }

	showOrHideNumber = () => {      
    	if (this.state.showNumber) {
        	this.setState({
            	showNumber: false ,
              	buttonText: 'Hide the Number of Games Played'
            })
          	this.props.onToggleGameNumber(true);
        } else {
        	this.setState({
            	showNumber: true ,
              	buttonText: 'Show the Number of Games Played'
            })
          	this.props.onToggleGameNumber(false);
        }
    }

	render() {
    	return (
      		<div>
              <button onClick={(event) => this.showOrHideNumber()}>{this.state.buttonText}</button>
			</div>
        )
    }
}

export default ToggleNumberOfGames