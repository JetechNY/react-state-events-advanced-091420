import React from "react";
import "./App.css";
import BeyContainer from './Containers/BeyContainer'
import Favorites from './Containers/Favorites'


class App extends React.Component{
  render(){
    return (
      <>
          <BeyContainer/>
          <Favorites/>
      </>
    );
  };
}

export default App;
