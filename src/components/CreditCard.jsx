import React from "react";
import Visa from "../assets/images/visa.png"
import Mastercard from "../assets/images/master-card.svg"

function CreditCard(props) {

    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props
    const cardNumber = number.substr(-4)
    const divStyle = {
        backgroundColor: bgColor,
        color: color,
      };
    return (
        <div className="credit-card" style={divStyle}>
            <div className="logo">{type === 'Visa' ? <img src={Visa}/> : <img src={Mastercard}/>}</div>
            <div className="card-number"><h1>**** **** **** {cardNumber}</h1></div>
            <div className="expiration-month">Expires {expirationMonth}/{expirationYear}  {bank}</div>
            <div className="owner">{owner}</div>
        </div>
    )
}

export default CreditCard;