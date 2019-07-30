import React from "react";

const userInput = props => {
	return (
		<div>
			<label for="" />
			<input type="text" onChange={props.changed} />
		</div>
	);
};

export default userInput;
