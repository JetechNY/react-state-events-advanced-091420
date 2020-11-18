import React from "react";
import "./App.css";
import BeyContainer from './Containers/BeyContainer'
import Favorites from './Containers/Favorites'


class App extends React.Component{

  state = { bey: {} }

  appClickHandler = (bey_obj) => {
    let newBeyArray = []
    newBeyArray.push(bey_obj)
    this.setState({bey: [bey_obj, ...newBeyArray]})
    console.log(newBeyArray)
  }

  render(){
    return (
      <>
          <BeyContainer appClickHandler={this.appClickHandler}/>
          <Favorites bey={this.state.bey}/>
      </>
    );
  };
}

export default App;
