import React from 'react';
import "./"
import Data from './Components/Fakedata/Data';
import "./App.css"



function App(props) {
 

  return (

    <div className="AppContainer">
    <header>
      <h2>Welcome to online courses</h2>
    </header>

      <div>
    <Data ></Data>
      </div>
    </div>
  
  );
}

export default App;
