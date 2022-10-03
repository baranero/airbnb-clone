import React from "react";

export default function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.country === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`../images/${props.img}`} className="card--image"/>
            <div className="card--stats">
                <img src={`../images/star.png`} />
                <span>{props.rating}&nbsp;</span>
                <span className="card--stats--rating">&#40;{props.reviewCount}&#41; &#x2022;&nbsp;</span>
                <span className="card--stats--rating">{props.country}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><b>From ${props.price} </b>/ person</p>
        </div>
    )

}