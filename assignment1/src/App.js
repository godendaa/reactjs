import React, { Component } from "react";
import "./App.css";
import UserOutput from "./UserOutput/UserOutput";
import UserInput from "./UserInput/UserInput";

class App extends Component {
	render() {
		return (
			<div className="App">
				<UserInput />
				<UserOutput name="Gary" age="23" />
				<UserOutput name="Mark" age="29" />
				<UserOutput> Username: GO</UserOutput>
			</div>
		);
	}
}

export default App;
