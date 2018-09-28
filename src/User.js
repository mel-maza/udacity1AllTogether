import React from 'react';

const User = (props) => {
	return (
        	<li key={props.user}>
				{props.user}
				<p>{props.user} played {props.gameNumber} games.</p>
			</li>
        )
}

export default User