import { createContext, useEffect, useState } from "react";
import vehicleData from '../DB/vehicleData.json';

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