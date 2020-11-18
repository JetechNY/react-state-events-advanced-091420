import React from "react";
import BeyCard from '../Components/BeyCard'

class BeyContainer extends React.Component {

  renderBey = () => {
    return(
      this.props.beyArray.map(beyObj => <BeyCard key={beyObj.id} beyObj={beyObj} appClickHandler={this.props.appClickHandler}/>)
    )
  }

  render() {

    return (
      <div className="index">
        <h1>Index</h1>
        {this.renderBey()}
      </div>
    );
  }


}

export default BeyContainer;
