import React from "react";

class Favorites extends React.Component {

  render() {
    return (
      <div className="favorites">
        <h1>Favorites</h1>
        <span>
          <h2> {this.props.bey.name}</h2>
          <img alt={this.props.bey.name} src={this.props.bey.img} />
        </span>
      </div>
    );
  }
}

export default Favorites
