import React from 'react';
import User from './User';

function UserList(props) {
	return (
    	<ol>
      		{props.users.map((user) => <User user={user} gameNumber={props.gameNumber} />)}
      	</ol>
    )
}

export default UserList