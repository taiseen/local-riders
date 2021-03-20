import React, { useEffect, useState } from 'react';
import './Home.css'
import vehicleData from '../DB/vehicleData.json'
import Vehicle from '../Vehicle/Vehicle';

const Home = () => {


    const [vehicles, setVehicles] = useState([])

    console.log('data ==> ', vehicles);

    useEffect(() => {
        setVehicles(vehicleData);
    }, [])


    return (
        <div className="vehicles_container">
            {
                vehicles.map(vehicle => <Vehicle info={vehicle} key={vehicle.id} />)
            }
        </div>
    );
};

export default Home;