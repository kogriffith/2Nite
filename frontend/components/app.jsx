import React from 'react';
import Events from './events';

// SeatGeek client id: MjAyODI5NTZ8MTU3ODc4NzI1MC4wNQ
// SeatGeek app secret: 840dee17d5527ac416769abaa4ce351eb9abc856052508cea5dc45abc859dfcf

const App = () => {
  // const [songkick, setSongkick] = React.useState('');
  // const [weatherLocation, setWeatherLocation] = React.useState('');
  // const [coordinates, setCoordinates] = React.useState(["0", "0"]);
  // const [nearbyEvents, setNearbyEvents] = React.useState('');

  // const seat_geek_id = "MjAyODI5NTZ8MTU3ODc4NzI1MC4wNQ";
  // const seat_geek_secret = "840dee17d5527ac416769abaa4ce351eb9abc856052508cea5dc45abc859dfcf";


  // const getLocation = () => {
  //   console.log('testing location');
  //   window.navigator.geolocation.getCurrentPosition((georesponse) => {
  //     console.log(georesponse.coords);
  //     setCoordinates([georesponse.coords.latitude, georesponse.coords.longitude]);
  //   });
  // };

  // https://api.seatgeek.com/2/events?client_id=MYCLIENTID&client_secret=MYCLIENTSECRET
  // https://api.seatgeek.com/2/events?geoip=98.213.245.205&range=12mi
  // const getNearbyEvents = () => {
  //   const url = "https://api.seatgeek.com/2/events?client_id=" + seat_geek_id + "&client_secret=" + seat_geek_secret
  //     + "&lat=" + coordinates[0] + "&lon=" + coordinates[1] + "&range=30mi" & "sort:score.desc";
  //   axios.get(url)
  //     .then((res) => {
  //       console.log('seatgeek api req response !!');
  //       setNearbyEvents(JSON.stringify(res));
  //       console.log(nearbyEvents);
  //     })
  //     .catch((e) => console.log(e));

  // }

  return (
    <div className="app">
      <div className = "events-container">
        <Events/>
      {/* <h1>Songkick API</h1>
      <input
        value={songkick} s
        onChange={e => setSongkick(e.target.value)}
      />
      <button
        onClick={songkickAPI}>
        Submit
        </button> */}
      {/* <br />
      <br />
      <h1>Location</h1>
      <h1>Latitude: {coordinates[0]} Longitude: {coordinates[1]}</h1>
      <button onClick={getLocation}>Locate</button> */}
      {/* <br />
      <br />
      <button onClick={getNearbyEvents}>Get Events!</button>
      <h2>{nearbyEvents}</h2> */}
      </div>
    </div>
  )
};

export default App;