import React from 'react';
import Events from './events';
import Food from './food';


const App = () => {

  return (
    <div className="app">
      <div className = "section-container">
        <Events/>
      </div>
      <div className = "section-container">
      <Food />
      </div>
    </div>
  )
};

export default App;