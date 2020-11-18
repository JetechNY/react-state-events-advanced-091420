import React from "react";


class BeyCard extends React.Component {

  beyClickHandler = () => {
    this.props.appClickHandler(this.props.bey)
  }

  render() {
    return (
      <div className="card" key={this.props.bey.id} >
        <span>
          <h2> {this.props.bey.name}</h2>
          <img onClick={this.beyClickHandler} alt={this.props.bey.name} src={this.props.bey.img} />
        </span>
      </div>
      );
    };
  }

export default BeyCard;
