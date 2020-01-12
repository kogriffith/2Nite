const getLocation = () => {
    // var coords = [];
    // console.log('testing location');
    window.navigator.geolocation.getCurrentPosition((georesponse) => {
      // console.log(georesponse.coords);
    //   setCoordinates([georesponse.coords.latitude, georesponse.coords.longitude]);
    // coords = [georesponse.coords.latitude, georesponse.coords.longitude]
    // console.log('coords: ', coords);
    return [georesponse.coords.latitude, georesponse.coords.longitude];
    })
  };


  export default getLocation;