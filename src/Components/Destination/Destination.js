import React, { useState } from 'react';
import './Destination.css'
import mapStaticImage from '../../img/map.png'
import { useParams } from 'react-router';
import vehicleData from '../DB/vehicleData.json'
import { Link } from 'react-router-dom';
import Map from '../GoogleMap/Map'

const Destination = () => {

    const [location, setLocation] = useState({
        source: '',
        destination: '',
    });
    //const place = {...location};

    const { vehicleType } = useParams();
    const vehicle = vehicleData.find(v => v.id == vehicleType);

    //console.log(vehicle);

    const handleUserInput = (event) => {
        const { name, value } = event.target;
        if (name === "source") {
            location.source = value
            setLocation(location)
        }

        if (name === "destination") {
            location.destination = value
            setLocation(location)
        }
        setLocation(location)
        //console.log(location);

    }


    return (

        <div className="destinationPage">

            <div className="user_input_area">
                <label for="">Pickup From</label>
                <input type="text" className="input_area" onBlur={handleUserInput} name="source" placeholder="Source" required />

                <label for="">Pickup To</label>
                <input type="text" className="input_area" onBlur={handleUserInput} name="destination" placeholder="Destination" required />

                <Link to={`/goto/${vehicle.id}`}>
                    <button>Search</button>
                </Link>
            </div>

            <div className="map_area">
                {/* Image Of Map */}
                {/* <img src={mapStaticImage} alt="" /> */}

                {/* Dynamic Google Map */}
                <Map></Map>
            </div>
        </div>
    );
};


export default Destination;

//     export default GoogleApiWrapper({
//     apiKey: 'AIzaSyDGArUEBa5ns09IA7nt7jP-xfNIUkToFts'
// })(Destination);