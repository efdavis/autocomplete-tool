import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Example extends Component {

  render() {
    return (
      <div>
        <h1>Swag2</h1>
      </div>
    );
  }
}


//maybe useful code snippets

{/* <div>
  {this.props.breed ? console.log(this.props.breeds[0], 'breed list') : console.log('loading...')}
</div> */}

//map broken down
{/* <div>
  {breedList.map((breed, i) => {
    return <li key={i}>{breed.breeds}</li>
  })}
</div> */}


export default Example;
// We only want to try to render our component on pages that have a div with an ID
// of "example"; otherwise, we will see an error in our console 

ReactDOM.render(<Example />, document.getElementById('reactApp'));

// if (document.getElementById('example')) {
//   console.log('example found')
//   ReactDOM.render(<Example />, document.getElementById('example'));
// }

