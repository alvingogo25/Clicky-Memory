import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Wrapper from './components/Wrapper';
import characters from './characters.json';
import ImgCard from './components/ImgCard';
import Alert from './components/Alert';

let score = 0;
let topScore = 0;
let gameMessage = "";

class App extends React.Component {
  state = {
    characters,
    score,
    topScore,
    gameMessage
  }

  componentDidMount() {
    this.setState(this.shuffleChar(characters));
    // console.log(this.state)
  }

  shuffleChar = arr => {
    // const characters = this.state.characters;
    var m = arr.length, t, i;

    // While there remain elements to shuffle…
    while (m) {

      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = arr[m];
      arr[m] = arr[i];
      arr[i] = t;
    }

    return arr;
  }

  setClicked = id => {
    // copy this.state for manipulating
    const newState = this.state;

    const matched = newState.characters.find(char => char.id === id);

    if (matched.clicked) {
      if (newState.score > newState.topScore) {
        newState.topScore = newState.score
      }
      newState.score = 0;
      newState.characters.forEach(char => {
        char.clicked = false;
      });
      newState.gameMessage = "danger";
    }
    else if (score < 11) {
      matched.clicked = true;
      newState.score++;
      newState.gameMessage = "success";
      newState.characters = (this.shuffleChar(newState.characters));
    }
    else {
      matched.clicked = true;
      newState.topScore = 12;
      newState.score = 0;
      newState.gameMessage = "";
      newState.characters.forEach(char => {
        char.clicked = false;
      });

    }
    this.setState(newState)


  }

  render() {
    return (
      <div className="App">
        <Nav score={this.state.score} topScore={this.state.topScore}/>
        <header className="bg-light px-3">
          <h1>Pixar Memory</h1>
          <h6>Click a character to begin.</h6>
          <h6>Don't click the same character more than once!</h6>
          {this.state.gameMessage ? <Alert color={this.state.gameMessage} />: ""}
        </header>
        <Wrapper>
          {this.state.characters.map(char => (
            <ImgCard
              id={char.id}
              key={char.id}
              name={char.name}
              setClicked={this.setClicked}
            />
        ))}
        </Wrapper>
      </div>
    )
  }
};

export default App;
