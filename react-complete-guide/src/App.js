import React, { Component /* useState */ } from "react";
import "./App.css";
import Person from "./Person/Person";

//Component based state management

class App extends Component {
	state = {
		persons: [
			{
				name: "Max",
				age: 28
			},
			{
				name: "Gary",
				age: 30
			},
			{
				name: "Mark",
				age: 37
			}
		]
	};

	switchNameHandler = newName => {
		// Dont do this! this.state.persons[0].name = "New Name";
		this.setState({
			persons: [
				{
					name: newName,
					age: 10
				},
				{
					name: "Tyler",
					age: 30
				},
				{
					name: "Mark",
					age: 27
				}
			]
		});
	};

	nameChangedHandler = event => {
		this.setState({
			persons: [
				{
					name: "Max",
					age: 10
				},
				{
					name: event.target.value,
					age: 30
				},
				{
					name: "Mark",
					age: 27
				}
			]
		});
	};

	render() {
		const style = {
			backgroundColor: "white",
			font: "inherit",
			border: "1px solid blue",
			padding: "8px",
			cursor: "pointer"
		};

		return (
			<div className="App">
				<h1>React App </h1>
				<button
					style={style}
					onClick={this.switchNameHandler.bind(this, "John")}
				>
					Switch Name
				</button>
				<Person
					name={this.state.persons[0].name}
					age={this.state.persons[0].age}
				/>
				<Person
					name={this.state.persons[1].name}
					age={this.state.persons[1].age}
					click={this.switchNameHandler.bind(this, "John!")}
					changed={this.nameChangedHandler}
				/>
				<Person
					name={this.state.persons[2].name}
					age={this.state.persons[2].age}
				>
					Hobbies are:
				</Person>
			</div>
		);

		// return React.createElement(
		// 	"div",
		// 	{ className: "App" },
		// 	React.createElement("h1", null, "HI ")
		// );
	}
}

export default App;

// Hooks based management
/*
const app = props => {
	// useState can be used multiple times.
	const [personsState, setPersonsState] = useState({
		persons: [
			{
				name: "Max",
				age: 28
			},
			{
				name: "Gary",
				age: 30
			},
			{
				name: "Mark",
				age: 37
			}
		]
	});

	const [otherState, setOtherState] = useState("The other state");

	console.log(personsState, otherState);
	const switchNameHandler = () => {
		// Dont do this! this.state.persons[0].name = "New Name";

		// Does not merge but replaces the data in the state
		setPersonsState({
			persons: [
				{
					name: "Max",
					age: 28
				},
				{
					name: "Gary",
					age: 30
				},
				{
					name: "Mark",
					age: 27
				}
			]
		});
	};

	return (
		<div className="App">
			<h1>React App </h1>
			<button onClick={switchNameHandler}>Switch Name</button>
			<Person
				name={personsState.persons[0].name}
				age={personsState.persons[0].age}
			/>
			<Person
				name={personsState.persons[1].name}
				age={personsState.persons[1].age}
			/>
			<Person
				name={personsState.persons[2].name}
				age={personsState.persons[2].age}
			>
				Hobbies are:
			</Person>
		</div>

		// return React.createElement(
		// 	"div",
		// 	{ className: "App" },
		// 	React.createElement("h1", null, "HI ")
		// );
	);
};

export default app;
*/
