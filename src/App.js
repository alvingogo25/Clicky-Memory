import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Wrapper from './components/Wrapper';
import characters from './characters.json';
import ImgCard from './components/ImgCard';
import Alert from './components/Alert';



class App extends React.Component {
  state = {
    characters,
    score: 0,
    topScore: 0,
    gameMessage: "",
    alertColor: ""
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
      newState.alertColor = "danger";
      newState.gameMessage = "You Guessed That Already! Game Over! Click an image to play again";
    }
    else if (newState.score < 11) {
      matched.clicked = true;
      newState.score++;
      newState.alertColor = "success";
      newState.gameMessage = "Good job keep guessing!";
    }
    else {
      matched.clicked = true;
      newState.topScore = 12;
      newState.score = 0;
      newState.alertColor = "info";
      newState.gameMessage = "You won! Click an image to play again";
      newState.characters.forEach(char => {
        char.clicked = false;
      });
    }
    newState.characters = (this.shuffleChar(newState.characters));
    this.setState(newState)


  }

  render() {
    return (
      <div className="App">
        <Nav score={this.state.score} topScore={this.state.topScore}/>
        <header className="bg-light px-3">
          <h1>Pixar Memory</h1>
          <h6>Click a character to begin.</h6>
          <h6>"Don't click the same character more than once!"</h6>
          {this.state.alertColor ? <Alert color={this.state.alertColor} message={this.state.gameMessage} />: ""}
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
