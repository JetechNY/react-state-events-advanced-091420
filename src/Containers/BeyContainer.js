import React from "react";
import beyArray from '../api';
import BeyCard from '../Components/BeyCard'

class BeyContainer extends React.Component {

  renderBey = beyArray.map(beyObj => <BeyCard key={beyObj.id} bey={beyObj} appClickHandler={this.props.appClickHandler}/>)

  render() {
    console.log(this.renderBey.[0].props)
    return (
      <div className="index">
        {this.renderBey}
      </div>
    );
  }


}

export default BeyContainer;
