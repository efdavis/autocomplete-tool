import React, { Component } from 'react';

class BreedListEntry extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {

    return (
      <div>
        <h4>{this.props.breeds.era}</h4>
      </div>
    )
  }

}

export default BreedListEntry;