import React from 'react';
import RatingCountFormatter from '../utility/ReviewCountFormatter.js'

export default function PartneredPropertyCard(props) {
    
    let id = props.id;

    let formattedReviewCount = RatingCountFormatter(props.reviewCount)
    let formattedAmount = props.minimumPrice.toLocaleString('en-IN', {
        maximumFractionDigits: 0,
        style: 'currency',
        currency: 'INR'
    });

    return (
        <div className="card" type="button" onClick={() => {props.onPartneredPropertyCardClick(id)}}>
            <img src={`${props.coverImage}`} className="card--image" />
            <div className="card--stats">
                <img src="../images/star.png" className="card--star" />
                <span className="card--rating">{props.rating}</span>
                <span className="gray">({formattedReviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--name">{props.name}</p>
            <div className="card--price-text">
                <span >Starting from </span>
                <span className="card--price">{formattedAmount}</span>
            </div>
        </div>
    )
}
