import React from 'react';
import Events from './events';
import Food from './food';


const App = () => {

  return (
    <div className="app">
      <div className = "events-container">
        <Events/>
      </div>
      <Food />
    </div>
  )
};

export default App;