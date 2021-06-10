import React, { useContext } from 'react';
import { VehicleContext } from './ContextAPI/VehicleContext';
import Vehicle from './Vehicle';

const Home = () => {

    const { allVehicles } = useContext(VehicleContext);

    return (
        <div className="vehicles_container">
            {
                allVehicles.map(vehicle => <Vehicle info={vehicle} key={vehicle.id} />)
            }
        </div>
    );
};

export default Home;