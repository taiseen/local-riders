import React, { useState } from 'react';
import './Destination.css'
import mapStaticImage from '../../img/map.png'
import { useParams } from 'react-router';
import vehicleData from '../DB/vehicleData.json'
import { Link } from 'react-router-dom';
//import { Map, GoogleApiWrapper } from 'google-maps-react';

const Destination = () => {

    const [location, setLocation] = useState({
        source: '',
        destination: '',
    });
    //const place = {...location};

    const { vehicleType } = useParams();
    const vehicle = vehicleData.find(v => v.id == vehicleType);

    console.log(vehicle);

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
        console.log(location);

    }

    return (

        <div className="destinationPage">

            <div className="user_input_area">
                <label for="">Pickup From</label>
                <input type="text" className="input_area" onBlur={handleUserInput} name="source" placeholder="Source" required />

                <label for="">Pickup To</label>
                <input type="text" className="input_area" onBlur={handleUserInput} name="destination" placeholder="Destination" required />

                <Link to={'/goto'}>
                    <button>Search</button>
                </Link>
            </div>

            <div className="map_area">
                <img src={mapStaticImage} alt="" />
                {/* <p><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116834.0097778199!2d90.34928576871451!3d23.780777744581084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1616236719302!5m2!1sen!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe></p> */}

                {/* <Map
                    google={this.props.google}
                    zoom={14}
                    style={mapStyles}
                    initialCenter={
                        {
                            lat: -1.2884,
                            lng: 36.8233
                        }
                    }
                /> */}
            </div>
        </div>
    );
};


export default Destination;

//     export default GoogleApiWrapper({
//     apiKey: 'AIzaSyDGArUEBa5ns09IA7nt7jP-xfNIUkToFts'
// })(Destination);