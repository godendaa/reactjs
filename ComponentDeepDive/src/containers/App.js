import React, { Component } from "react";

import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import withClass from "../hoc/withClass";
import Aux from "../hoc/Aux";

class App extends Component {
	constructor(props) {
		super(props);
		console.log("[App.js] constructor");
	}

	static getDerivedStateFromProps(props, state) {
		console.log("[App.js] getDerivedStateFromProps", props);
		return state;
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log("[App.js] shouldComponentUpdate", nextProps);
		return true;
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log("[App.js] getSnapshotBeforeUpdate", prevProps);
		return prevState;
	}
	// componentWillMount() {
	// 	console.log("[App.js] componentWillMount");
	// }

	componentDidMount() {
		console.log("[App.js] componentDidMount");
	}

	componentDidUpdate() {
		console.log("[App.js] componentDidUpdate");
	}

	state = {
		persons: [
			{ id: "a1", name: "Max", age: 28 },
			{ id: "a2", name: "Manu", age: 29 },
			{ id: "a3", name: "Stephanie", age: 26 }
		],
		otherState: "some other value",
		showPersons: false,
		showCockpit: true,
		counter: 0
	};

	nameChangedHandler = (event, id) => {
		const personIndex = this.state.persons.findIndex(p => {
			return p.id === id;
		});

		const person = {
			...this.state.persons[personIndex]
		};
		person.name = event.target.value;
		const persons = [...this.state.persons];
		persons[personIndex] = person;
		this.setState((prevState, prop) => {
			return { persons: persons, counter: prevState.counter + 1 };
		});
	};

	deletePersonHandler = personIndex => {
		//const persons = this.state.persons.slice();
		const persons = [...this.state.persons];
		persons.splice(personIndex, 1);
		this.setState({ persons: persons });
	};

	togglePersonsHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({ showPersons: !doesShow });
	};

	render() {
		console.log("[App.js] Render");
		let persons = null;

		if (this.state.showPersons) {
			persons = (
				<Persons
					persons={this.state.persons}
					clicked={this.deletePersonHandler}
					changed={this.nameChangedHandler}
				/>
			);
		}

		return (
			<Aux>
				<button
					onClick={() => {
						this.setState({ showCockpit: false });
					}}
				>
					Remove Cockpit
				</button>
				{this.state.showCockpit ? (
					<Cockpit
						title={this.props.appTitle}
						showPersons={this.state.showPersons}
						personsLength={this.state.persons.length}
						clicked={this.togglePersonsHandler}
					/>
				) : null}
				{persons}
			</Aux>
		);
		// return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
	}
}

export default withClass(App, classes.App);
