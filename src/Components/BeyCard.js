import React from "react";


class BeyCard extends React.Component {

  newClickHandler = () => {
    this.props.appClickHandler(this.props.beyObj)
  }

  render() {
    return (
      <div className="card" key={this.props.beyObj.id} >
        <span>
          <h2> {this.props.beyObj.name}</h2>
          <img onClick={this.newClickHandler} alt={this.props.beyObj.name} src={this.props.beyObj.img} />
        </span>
      </div>
      );
    };
  }

export default BeyCard;


