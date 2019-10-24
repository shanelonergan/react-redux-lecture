import React, { Component } from 'react';
import { render } from 'react-dom';
import FruitList from './FruitList';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      fruit: [
        "Bluberry",
        "Strawberry"
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <FruitList fruitList={this.state.fruit}/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
