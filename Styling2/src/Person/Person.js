import React from "react";
import Radium, { StyleRoot } from "radium";
import "./Person.css";

const person = props => {
	const mediaStyle = {
		"@media (min-width: 550px)": {
			width: "450px"
		}
	};
	return (
		<div className="Person" style={mediaStyle}>
			<p onClick={props.click}>
				I'm {props.name} and I am {props.age} years old!
			</p>
			<p>{props.children}</p>
			<input type="text" onChange={props.changed} value={props.name} />
		</div>
	);
};

export default Radium(person);
