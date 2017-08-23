import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


class BreedForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      breed: ""
    }

  }

  render() {
    return (
      <div>
        <input onChange={(e) => this.setState({ breed: e.target.value })}></input>
        <button onClick={() => this.props.addToBreed(this.state)}>Breed Search</button>
      </div>
    );
  }
}

export default BreedForm;

