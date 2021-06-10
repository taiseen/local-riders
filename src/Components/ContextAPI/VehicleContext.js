import { createContext, useEffect, useState } from "react";
import vehicleData from '../vehicleData.json';

export const VehicleContext = createContext();


const VehicleContextProvider = (props) => {

    const [allVehicles, setAllVehicles] = useState([]);

    useEffect(() => {
        setAllVehicles(vehicleData);
    }, []);

    return (
        <VehicleContext.Provider value={{ allVehicles }}>
            {props.children}
        </VehicleContext.Provider>
    );
};

export default VehicleContextProvider;