import { Link } from 'react-router-dom';

const Vehicle = (props) => {

    const { id, name, imgUrl } = props.info;

    return (
        <Link to={`/destination/${id}`}>
            
            <div className="vehicle_box">
                <img src={imgUrl} alt="" />
                <h2>{name}</h2>
            </div>
            
        </Link>
    );
};

export default Vehicle;