import React from 'react';
import './Destination.css'
import mapStaticImage from '../../img/map.png'
import { useParams } from 'react-router';
import vehicleData from '../DB/vehicleData.json'

const Destination = () => {

    const { vehicleType } = useParams();
    const vehicle = vehicleData.find(v => v.id == vehicleType);

    return (

        <div className="destinationPage">

            <div className="user_input_area">
                <label for="">Pickup From</label>
                <input type="text" className="input_area"/>

                <label for="">Pickup To</label>
                <input type="text" className="input_area"/>

                <button>Search</button>
            </div>

            <div className="map_area">
                <img src={mapStaticImage} alt="" />
            </div>
        </div>
    );
};

export default Destination;