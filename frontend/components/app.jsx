import React from 'react';
import Events from './events';

// SeatGeek client id: MjAyODI5NTZ8MTU3ODc4NzI1MC4wNQ
// SeatGeek app secret: 840dee17d5527ac416769abaa4ce351eb9abc856052508cea5dc45abc859dfcf

const App = () => {

  return (
    <div className="app">
      <div className = "events-container">
        <Events/>

      </div>
    </div>
  )
};

export default App;