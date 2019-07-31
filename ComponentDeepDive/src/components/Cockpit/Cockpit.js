import React, { useEffect } from "react";
import classes from "./Cockpit.css";

const cockpit = props => {
	useEffect(() => {
		console.log("[Cockpit.js] useEffect");
		setTimeout(() => {
			alert("This is an alert");
		}, 1000);
		return () => {
			console.log("[Cockpit.js] cleanup");
		};
	}, []);

	useEffect(() => {
		console.log("[Cockpit.js] 2nd useEffect ");
		return () => {
			console.log("[Cockpit.js] 2nd useEffect Cleanup");
		};
	});
	const assignedClasses = [];
	if (props.persons.length <= 2) {
		assignedClasses.push(classes.red);
	}
	if (props.persons.length <= 1) {
		assignedClasses.push(classes.bold);
	}

	let btnClass = "";
	if (props.showPersons) {
		btnClass = classes.red;
	}
	return (
		<div className={classes.Cockpit}>
			<h1>{props.title}</h1>
			<p className={assignedClasses.join(" ")}>This is really working!</p>
			<button className={btnClass} onClick={props.clicked}>
				Toggle Persons
			</button>
		</div>
	);
};

export default cockpit;
