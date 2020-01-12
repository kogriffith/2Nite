import React from 'react';
import axios from 'axios';
// import getLocation from './getLocation';

const Events = () => {
    const [runOnce, setRunOnce] = React.useState(false);
    const [nearbyEvents, setNearbyEvents] = React.useState([]);
    const [coordinates, setCoordinates] = React.useState(["0", "0"]);
    // const [events, setEvents] = React.useState([]);

    React.useEffect(() => {
        window.navigator.geolocation.getCurrentPosition((georesponse) => {
            setCoordinates([georesponse.coords.latitude, georesponse.coords.longitude]);
            setRunOnce(true);
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
        setRunOnce(false);
    };


    return (
        <div>
            {runOnce && getNearbyEvents()}
            <h1 className = "widget-title">Events</h1>
            {
                nearbyEvents.map((event, i) => (
                    <div className="single-event-container" key={i}>
                        <img src={event.performers[0].image} />
                        <div className="text-container">
                            <h1>{event.title}</h1>

                            <h3>{event.type}</h3>
                            <h3>{event.datetime_local}</h3>
                            <h6>Powered By SeatGeek</h6>
                        </div>

                        {/* <h3>{event.performers[0].image}</h3> */}
                    </div>
                )
                )
            }

        </div>
    );
};

export default Events;