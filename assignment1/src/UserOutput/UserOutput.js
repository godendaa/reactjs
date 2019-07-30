import React from "react";

const userOutput = props => {
	return (
		<div>
			<p>{props.username}</p>
			<p>{props.loggedIn}</p>
			<p>{props.children}</p>
		</div>
	);
};

export default userOutput;
