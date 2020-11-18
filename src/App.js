import React from "react";
import "./App.css";
import BeyContainer from './Containers/BeyContainer'
import Favorites from './Containers/Favorites'
import beyArray from './api';


class App extends React.Component{

  state = { beyArray }

  appClickHandler = (bey_obj) => {
    let newBeyArray = this.state.beyArray
    newBeyArray[newBeyArray.indexOf(bey_obj)].favorite = true
    this.setState({beyArray: newBeyArray})
  }

  render(){
    return (
      <>
          <BeyContainer beyArray={this.state.beyArray} appClickHandler={this.appClickHandler}/>
          <Favorites beyArray={this.state.beyArray}/>
      </>
    );
  };
}

export default App;
