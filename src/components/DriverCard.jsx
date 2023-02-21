import React from "react";
import Rating from "./Rating";

function DriverCard(props) {

    const { name, rating, img, car } = props
    return (
        <div className="driver-license">
            <div className="license-img">
            <img src={img} alt={name} />
            </div>
            <div className="driver-info">
            <h3>{name}</h3>
            <Rating>{rating}</Rating>
            <p>{car.model} - {car.licensePlate}</p>
            </div>
        </div>
    )
}

export default DriverCard;