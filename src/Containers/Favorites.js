import React from "react";

class Favorites extends React.Component {

  state = {

  }

  removePlayer(id) {
    const newState = this.state;
    const index = newState.players.findIndex(a => a.id === id);

    if (index === -1) return;
    newState.players.splice(index, 1);

    this.setState(newState); // This will update the state and trigger a rerender of the components
  }

  // clickHandler = () => {
  //   if (this.props.bey.favorite == true) {
      
  //   }
  // }

  render() {
    
    return (
      <div className="favorites">
        <h1>Favorites</h1>
        <span>
          <h2> {this.props.bey.name}</h2>
          <img onClick={this.clickHandler} alt={this.props.bey.name} src={this.props.bey.img} />
        </span>
      </div>
    );
  }
}

export default Favorites
