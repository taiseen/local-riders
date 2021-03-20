import React from 'react';
import './GoTo.css'

import people from '../../img/people.png'
import car from '../../img/car.png'
import mapStaticImage from '../../img/map.png'

const GoTo = () => {



    return (
        <div className="main_area">

            <section class="location-section">
                <div class="direction">
                    <p class="dir-from">Mirpur</p>
                    <span class="hr-bar"></span>
                    <p class="dir-to">Dhanmondi</p>
                </div>

                <div class="result_box">
                    <img class="vehicle" src={car} alt="" />
                    <h3>Car</h3>
                    <img class="people" src={people} alt="" />
                    <h3>4</h3>
                    <h3>$60</h3>
                </div>
                <div class="result_box">
                    <img class="vehicle" src={car} alt="" />
                    <h3>Car</h3>
                    <img class="people" src={people} alt="" />
                    <h3>4</h3>
                    <h3>$60</h3>
                </div>
                <div class="result_box">
                    <img class="vehicle" src={car} alt="" />
                    <h3>Car</h3>
                    <img class="people" src={people} alt="" />
                    <h3>4</h3>
                    <h3>$60</h3>
                </div>
                <div class="result_box">
                    <img class="vehicle" src={car} alt="" />
                    <h3>Car</h3>
                    <img class="people" src={people} alt="" />
                    <h3>4</h3>
                    <h3>$60</h3>
                </div>
            </section>

            <div class="map_area">
                <img src={mapStaticImage} alt="" />
            </div>

        </div>
    );
};

export default GoTo;