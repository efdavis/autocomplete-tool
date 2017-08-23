import React, { Component } from 'react';

class WishList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const wishList = this.props.wishList;
    const wishListDisplay = wishList.map((breed, i) => {
      return (
        <li key={breed.id}>{breed.breeds}</li>
      )
    })

    return (
      <ul>
        {wishListDisplay}
      </ul>
    )
  }
}

export default WishList;

