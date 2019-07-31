import React from "react";
import "./CharComponent.css";

const charComponent = props => {
	return (
		<div class="charComponent">
			<p>{props.text}</p>
		</div>
	);
};

export default charComponent;
