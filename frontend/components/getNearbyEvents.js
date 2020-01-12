import 'babel-polyfill';
import axios from 'axios';
// https://api.seatgeek.com/2/events?client_id=MYCLIENTID&client_secret=MYCLIENTSECRET
// https://api.seatgeek.com/2/events?geoip=98.213.245.205&range=12mi
import getLocation from './getLocation';


const getNearbyEvents = () => {
  window.navigator.geolocation.getCurrentPosition((georesponse) => {
    const coordinates = [georesponse.coords.latitude, georesponse.coords.longitude];
    // console.log(coordinates);
    const seat_geek_id = "MjAyODI5NTZ8MTU3ODc4NzI1MC4wNQ";
    const seat_geek_secret = "840dee17d5527ac416769abaa4ce351eb9abc856052508cea5dc45abc859dfcf";

    const url = "https://api.seatgeek.com/2/events?client_id=" + seat_geek_id + "&client_secret=" + seat_geek_secret
      + "&lat=" + coordinates[0] + "&lon=" + coordinates[1] + "&range=30mi" + "&sort=score.desc";
    // console.log('url: ', url);
    axios.get(url)
      .then((res) => {
        // console.log('seatgeek api req response !!');
        // console.log(JSON.stringify(res));
        return (
            JSON.stringify(res)
        )
      })
      .catch((e) => console.log(e));
  });
};

// const getNearbyEvents = () => {
//   getLocation().then((coords) => console.log('.then(coords): ', coords));
// };

export default getNearbyEvents;