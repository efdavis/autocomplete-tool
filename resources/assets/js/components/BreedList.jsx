import React, {Component} from 'react';

class BreedList extends Component {
  constructor(props) {
    super(props);
  }
  
  render(){
    const breedList = this.props.breedList;
    const breedDisplay = breedList.map((breed, i) => {
      return (
        <li key={breed.id}>{breed.breeds}</li>
      )
    })

    return(
         <ul>
          {breedDisplay}
        </ul> 
    )
  }
}

export default BreedList;

