import React from 'react';
import './Destination.css'
import mapStaticImage from '../../img/map.png'
import { useParams } from 'react-router';
const Destination = () => {

    const { productKey } = useParams();

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