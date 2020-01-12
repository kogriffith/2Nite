import React from 'react';
import axios from 'axios';
// import getLocation from './getLocation';

const Events = () => {

    const [nearbyEvents, setNearbyEvents] = React.useState([]);
    const [coordinates, setCoordinates] = React.useState(["0", "0"]);
    // const [events, setEvents] = React.useState([]);

    React.useEffect(() => {
        window.navigator.geolocation.getCurrentPosition((georesponse) => {
            setCoordinates([georesponse.coords.latitude, georesponse.coords.longitude]);
        })
    }, []);

    const getNearbyEvents = () => {
        // window.navigator.geolocation.getCurrentPosition((georesponse) => {
        //     setCoordinates([georesponse.coords.latitude, georesponse.coords.longitude]);
        const seat_geek_id = "MjAyODI5NTZ8MTU3ODc4NzI1MC4wNQ";
        const seat_geek_secret = "840dee17d5527ac416769abaa4ce351eb9abc856052508cea5dc45abc859dfcf";
        const url = "https://api.seatgeek.com/2/events?client_id=" + seat_geek_id + "&client_secret=" + seat_geek_secret
            + "&lat=" + coordinates[0] + "&lon=" + coordinates[1] + "&range=30mi" + "&sort=score.desc";
        console.log(url);
        // })
        axios.get(url)
            .then((res) => {
                // console.log(JSON.stringify(res));
                setNearbyEvents((res.data.events).splice(0, 3));
            })
            .catch((e) => console.log(e));
    };


    return (
        <div>
            <button onClick={getNearbyEvents}>Get Events!</button>
            {/* <h2>{JSON.stringify(nearbyEvents)}</h2> */}

            {
                nearbyEvents.map((event, i) => (
                    <div key={i}>
                        <h2>Event: {event.title}</h2>
                        <h3>{event.type}</h3>
                        <h3>{event.datetime_local}</h3>
                        <img src={event.performers[0].image}/>
                        <h6>Powered By SeatGeek</h6>
                        <img src="<%= asset_path('images/60x46.png') %>"/>
                {/* <h3>{event.performers[0].image}</h3> */}
                    </div>
                )
                )
            }

        </div>
    );
};

export default Events;