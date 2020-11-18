import React from "react";
import BeyCard from '../Components/BeyCard'

class Favorites extends React.Component {

  renderBey = () => {
    return(
      this.props.beyArray.filter(beyObj => beyObj.favorite).map(beyObj => <BeyCard key={beyObj.id} beyObj={beyObj}/>)
    )
  }

  render() {

    return (
      <div className="favorites">
        <h1>Favorites</h1>
        {this.renderBey()}
      </div>
    );
  }
}

export default Favorites
