import React from 'react';
import axios from 'axios';
// import getLocation from './getLocation';

const Events = () => {
    const [nearbyEvents, setNearbyEvents] = React.useState('');
    const [coordinates, setCoordinates] = React.useState(["0", "0"]);

    const getNearbyEvents = () => {
        window.navigator.geolocation.getCurrentPosition((georesponse) => {
          setCoordinates([georesponse.coords.latitude, georesponse.coords.longitude]);
          // console.log(coordinates);
          const seat_geek_id = "MjAyODI5NTZ8MTU3ODc4NzI1MC4wNQ";
          const seat_geek_secret = "840dee17d5527ac416769abaa4ce351eb9abc856052508cea5dc45abc859dfcf";
      
          const url = "https://api.seatgeek.com/2/events?client_id=" + seat_geek_id + "&client_secret=" + seat_geek_secret
            + "&lat=" + coordinates[0] + "&lon=" + coordinates[1] + "&range=30mi" + "&sort=score.desc";
          axios.get(url)
            .then((res) => {
              setNearbyEvents(JSON.stringify(res));
            })
            .catch((e) => console.log(e));
        });
      };
      

    return (
        <div>
            <button onClick={getNearbyEvents}>Get Events!</button>
            <h2>{nearbyEvents}</h2>
        </div>
    );
};

export default Events;