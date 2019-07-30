import React from "react";

const userOutput = props => {
	return (
		<div>
			<p>{props.name}</p>
			<p>{props.age}</p>
			<p>{props.children}</p>
		</div>
	);
};

export default userOutput;
