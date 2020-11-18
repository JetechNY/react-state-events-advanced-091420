import React from "react";
import beyArray from '../api';
import BeyCard from '../Components/BeyCard'

class BeyContainer extends React.Component {

  renderBey = beyArray.map(beyObj => <BeyCard key={beyObj.id} bey={beyObj} appClickHandler={this.props.appClickHandler}/>)

  render() {
    
    return (
      <div className="index">
        <h1>Index</h1>
        {this.renderBey}
      </div>
    );
  }


}

export default BeyContainer;
