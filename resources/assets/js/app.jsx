import React, { Component } from 'react';
import Example from './components/Example.jsx';
import BreedList from './components/BreedList.jsx';
import BreedForm from './components/BreedForm';
import ReactDOM from 'react-dom';
import axios from 'axios';

// require('./bootstrap');


// props.dispatch({ type: "GET_API_BREEDS" });
// craig code


class App extends Component {
  constructor(props) {
    super(props); {

      this.state = {
        breeds: [],
        wishListBreeds: []
      }
    }

    axios.get('/api/breeds')
      .then(({ data }) => {
        console.log('data', data);
        this.setState({
          breeds: data
        })
      })

      .catch((err) => {
        console.log(err, 'err')
      }); 

    this.addToBreed = this.addToBreed.bind(this);

  }

  //naive method
  addToBreed(dogBreed){
    console.log("breed Added");

        axios.post('/api/dogBreedAdd', dogBreed)
      .then((res) => {
        // console.log(res.config.data, 'this is the response from the client');
        console.log(res, 'this is the response from the client');
      })
      .catch((err) => {
        console.log('didnt come back', err)
      });
  }

  // addToBreed(dogBreed) {
  //   console.log("breed Added");

  //   axios.post('/api/dogBreedAdd', {
  //     breeds: this.state.breed
  //   })
  //     .then((res) => {
  //       console.log(res, 'Breed added to dB');
  //     })
  //     .catch((err) => {
  //       console.log('didnt come back', err)
  //     });
  // }

  render() {
    // console.log(this.state.breeds,'hai')
    return( 
      <div>
        <h1>Welcome To Wag</h1>
        <BreedForm addToBreed={this.addToBreed}/>
        <BreedList breedList={this.state.breeds} />
        {/* <WishList wishList={this.state.breeds} /> */}
        <div>
          {this.state.breeds ? null : console.log('loading...')}
        </div>
      </div>
      
    );
  }
}



export default App;

ReactDOM.render(<App />, document.getElementById('reactApp'));




/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */



// window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// Vue.component('example', require('./components/Example.vue'));

// const app = new Vue({
//     el: '#app'
// });
