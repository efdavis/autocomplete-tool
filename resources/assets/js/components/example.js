import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Example extends Component {

  render() {
    return (
      <div>
        <h1>Swag</h1>
      </div>
    );
  }
}
export default Example;
// We only want to try to render our component on pages that have a div with an ID
// of "example"; otherwise, we will see an error in our console 

// ReactDOM.render(<Example />, document.getElementById('example'));

if (document.getElementById('example')) {
  console.log('example found')
  ReactDOM.render(<Example />, document.getElementById('example'));
}

