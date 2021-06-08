import React, { useState } from 'react';
import vehicleData from '../DB/vehicleData.json'
import Map from '../GoogleMap/Map'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './Destination.css'

const Destination = () => {

    const { vehicleID } = useParams();
    const vehicle = vehicleData.find(v => v.id === parseInt(vehicleID));

    const [location, setLocation] = useState({
        source: '',
        destination: '',
    });



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
    }

    return (
        <div className="destinationPage">

            <div className="user_input_area">
                <label for="">Pickup From</label>
                <input type="text" className="input_area" onBlur={handleUserInput} name="source" placeholder="Source" required />

                <label for="">Pickup To</label>
                <input type="text" className="input_area" onBlur={handleUserInput} name="destination" placeholder="Destination" required />

                <Link to={`/goto/${vehicle.id}`}>
                    <button className="searchBtn">Search</button>
                </Link>
            </div>

            <div className="map_area">
                {/* Dynamic Google Map */}
                <Map></Map>
            </div>
        </div>
    );
};

export default Destination;