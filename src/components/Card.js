import React from "react";

export default function Card(props) {
    console.log(props);
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`../images/${props.coverImg}`} className="card--image"/>
            <div className="card--stats">
                <img src={`../images/star.png`} />
                <span>{props.stats.rating}&nbsp;</span>
                <span className="card--stats--rating">&#40;{props.stats.reviewCount}&#41; &#x2022;&nbsp;</span>
                <span className="card--stats--rating">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><b>From ${props.price} </b>/ person</p>
        </div>
    )

}