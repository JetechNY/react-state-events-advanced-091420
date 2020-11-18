import React from "react";


class BeyCard extends React.Component {

  render() {
    return (
      <div className="card" key={this.props.bey.id} >
        <h2> {this.props.bey.name}</h2>
        <img alt={this.props.bey.name} src={this.props.bey.img} />
      </div>
      );
    };
  }

export default BeyCard;
