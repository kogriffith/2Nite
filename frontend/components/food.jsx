import React from 'react';
import axios from 'axios';

const Food = () => {
    // Zomato
    // 0d4cc0fefb05d228f9bca501d7619baf
    // https://developers.zomato.com/api/v2.1/geocode?lat=34.416230399999996&lon=119.8473216
    // axios.get(url, {headers: {"user-key": "0d4cc0fefb05d228f9bca501d7619baf" }})

    // Foursquare
    // client id
    // 0OFPGRDPFWHODVHVUKVFVJQQ4IHEPIJA01SCFQSKJQFKPMNT
    // client secret
    // ACTUEN0GA33LUAPSBEG0REKT2PYNA2QDFCEGNDMDB2TJQSQL
    // 'https://api.foursquare.com/v2/venues/explore?client_id=CLIENT_ID&client_secret=CLIENT_SECRET&v=20180323&limit=1&ll=40.7243,-74.0018&query=coffee'

    const [coordinates, setCoordinates] = React.useState(["0", "0"]);
    const [nearbyFood, setNearbyFood] = React.useState([]);
    React.useEffect(() => {
        window.navigator.geolocation.getCurrentPosition((georesponse) => {
            setCoordinates([georesponse.coords.latitude, georesponse.coords.longitude]);
        })
    }, []);
    // const zomato = "0d4cc0fefb05d228f9bca501d7619baf";
    const foursquare_id = "0OFPGRDPFWHODVHVUKVFVJQQ4IHEPIJA01SCFQSKJQFKPMNT";
    const foursquare_secret = "ACTUEN0GA33LUAPSBEG0REKT2PYNA2QDFCEGNDMDB2TJQSQL";
    const getNearbyFood = () => {
        // const url = "https://developers.zomato.com/api/v2.1/geocode?lat=" + coordinates[0] + "&lon=" + coordinates[1];
        const url = "https://api.foursquare.com/v2/venues/explore?client_id=" + foursquare_id + "&client_secret=" + foursquare_secret + "&v=20200111" + "&ll=" + coordinates[0] + "," + coordinates[1]
            + "&radius=24141" + "&query=restaurant";
        axios.get(url)
            .then((res) => {
                // console.log(JSON.stringify(res.data));
                setNearbyFood((res.data.response.groups[0].items).splice(0, 3));
            });
    };

    return (
        <div>
            <button onClick={getNearbyFood}>Find Food</button>
            {
                nearbyFood.map((restaurant, i) => (
                    <div key={i}>
                        <h2>Restaurant: {restaurant.venue.name}</h2>
                        <h3>{restaurant.venue.location.address}</h3>
                        <h3>Distance: {(restaurant.venue.location.distance * 0.000621371).toFixed(2)} Miles Away</h3>
                        <h3>Type: {restaurant.venue.categories[0].shortName}</h3>
                    </div>
                ))
            }
        </div>
    )

};

export default Food;