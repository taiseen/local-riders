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
        <main>
            {
                vehicles.map(vehicle => <Vehicle info={vehicle} key={vehicle.id} />)
            }
        </main>
    );
};

export default Home;