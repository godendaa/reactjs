import React from "react";

const validationComponent = props => {
	console.log(props.text.length);
	const validLength =
		props.text.length < 5 ? "Text too short" : "Text long enough";
	return (
		<div>
			<p>{validLength}</p>
		</div>
	);
};

export default validationComponent;
