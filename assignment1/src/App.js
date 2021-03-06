import React, { Component } from "react";
import "./App.css";
import UserOutput from "./UserOutput/UserOutput";
import UserInput from "./UserInput/UserInput";

class App extends Component {
	state = {
		users: [
			{
				username: "GO",
				name: "Gary Odendaal"
			},
			{
				username: "MP",
				name: "Mark Paul"
			}
		]
	};

	usernameChangedHandler = event => {
		this.setState({
			users: [
				{
					username: event.target.value,
					name: "Gary Odendaal"
				},
				{
					username: "MP",
					name: "Mark Paul"
				}
			]
		});
	};
	render() {
		const style = {
			border: "5px solid black"
		};
		return (
			<div className="App">
				<UserInput
					style={style}
					changed={this.usernameChangedHandler}
					username={this.state.users[0].username}
				/>
				<UserOutput
					username={this.state.users[0].username}
					loggedIn={this.state.users[0].name}
				/>
				<UserOutput
					username={this.state.users[1].username}
					loggedIn={this.state.users[1].name}
				/>
			</div>
		);
	}
}

export default App;
