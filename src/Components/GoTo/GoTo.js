import React from 'react';
import './GoTo.css'

import people from '../../img/people.png'
import car from '../../img/car.png'
import mapStaticImage from '../../img/map.png'
import { useParams } from 'react-router';
import vehicleData from '../DB/vehicleData.json'

const GoTo = () => {

    const { vehicleID } = useParams();
    const vehicle = vehicleData.find(v => v.id == vehicleID);

    const { name , imgUrl , capacity , price } = vehicle ;
    return (
        <div className="main_area">

            <section className="location-section">
                <div className="direction">
                    <p className="dir-from">Mirpur</p>
                    <span className="hr-bar"></span>
                    <p className="dir-to">Dhanmondi</p>
                </div>

                <div className="result_box">
                    <img className="vehicle" src={imgUrl} alt="" />
                    <h3>{name}</h3>
                    <img className="people" src={people} alt="" />
                    <h3>{capacity}</h3>
                    <h3>${price}</h3>
                </div>
   
                <div className="result_box">
                    <img className="vehicle" src={imgUrl} alt="" />
                    <h3>{name}</h3>
                    <img className="people" src={people} alt="" />
                    <h3>{capacity}</h3>
                    <h3>${price}</h3>
                </div>
   
                <div className="result_box">
                    <img className="vehicle" src={imgUrl} alt="" />
                    <h3>{name}</h3>
                    <img className="people" src={people} alt="" />
                    <h3>{capacity}</h3>
                    <h3>${price}</h3>
                </div>
   
                <div className="result_box">
                    <img className="vehicle" src={imgUrl} alt="" />
                    <h3>{name}</h3>
                    <img className="people" src={people} alt="" />
                    <h3>{capacity}</h3>
                    <h3>${price}</h3>
                </div>
   
            </section>

            <div class="map_area">
                <img src={mapStaticImage} alt="" />
            </div>

        </div>
    );
};

export default GoTo;