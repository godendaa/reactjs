import React, { Component } from "react";
import "./App.css";
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from "./CharComponent/CharComponent";

class App extends Component {
	state = {
		text: "",
		length: 0,
		explodedString: []
	};

	updateStateLength = event => {
		const inputText = event.target.value;
		const textLength = inputText.length;
		const explodedString = inputText.split("");
		this.setState({
			text: inputText,
			length: textLength,
			explodedString: explodedString
		});

		console.log(this.state);
	};

	deleteCharacterHandler = characterIndex => {
		//const persons = this.state.persons.slice();
		const characters = this.state.explodedString;
		const text = this.state.text;
		const length = this.state.length;
		console.log(characters);
		characters.splice(characterIndex, 1);
		this.setState({ text: text, length: length, explodedString: characters });
	};

	render() {
		return (
			<div className="App">
				<ol>
					<li>
						Render a list of CharComponents where each CharComponent receives a
						different letter of the entered text (in the initial input field) as
						a prop.
					</li>
					<li>
						When you click a CharComponent, it should be removed from the
						entered text.
					</li>
				</ol>
				<p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
				<input type="text" onChange={event => this.updateStateLength(event)} />
				<p>{this.state.length}</p>
				<ValidationComponent text={this.state.text} />
				{this.state.explodedString.map((character, index) => {
					return (
						<CharComponent
							text={character}
							index={index}
							click={() => this.deleteCharacterHandler(index)}
						/>
					);
				})}
			</div>
		);
	}
}

export default App;
