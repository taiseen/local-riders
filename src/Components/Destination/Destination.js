import React from 'react';
import './Destination.css'
import mapStaticImage from '../../img/map.png'
const Destination = () => {
    return (

        <main>
            <div class="user_input_area">
                <label for="">Pickup From</label>
                <input type="text" />

                <label for="">Pickup To</label>
                <input type="text" />

                <button>Search</button>
            </div>

            <div class="map_area">
                <img src={mapStaticImage} alt="" />
            </div>
        </main>
    );
};

export default Destination;