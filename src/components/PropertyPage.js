import React from 'react';
import RatingCountFormatter from '../utility/ReviewCountFormatter.js'

export default function PropertyPage(props) {
    
    let id = props.id;

    let formattedReviewCount = RatingCountFormatter(props.reviewCount)
    let formattedAmount = props.minimumPrice.toLocaleString('en-IN', {
        maximumFractionDigits: 0,
        style: 'currency',
        currency: 'INR'
    });

    let overviewSection = createOverviewElement(props.description, props.rating, props.reviewCount)

    let amenitiesElementList = createAmenitiesElementList(props.amenities)
    let amenitiesSection;
    if(amenitiesElementList!=null){
        amenitiesSection = (
            <div>
                <div className="property-page--section-divider"/>
                <h3 className="property-page--section-header">What this hotel offers</h3>
                <div className="property-page--amenities-container">
                    {amenitiesElementList}
                </div>
            </div>
        )
    }

    let rulesElementList = createRulesElementList(props.checkInTime, props.checkOutTime, props.rules)
    let rulesSection;
    if(rulesElementList!=null){
        rulesSection = (
            <div>
                <div className="property-page--section-divider"/>
                <h3 className="property-page--section-header">Rules to know</h3>
                <div className="property-page--rules-container">
                    {rulesElementList}
                </div>
            </div>
        )
    }

    return (
        <div className="property-page--container">
            <h2 className="property-page--name">{props.name}</h2>
            <div className="property-page--other-links">
                <span className="property-page--other-links--location"><a href="url">{props.location}</a></span>
                <span className="property-page--other-links--share"><a href="url">Share</a></span>
            </div>

            {/* Images Section */}
            <div className="property-page--images-container">
                <img className="property-page--cover-image" src={`${props.coverImage}`}  />
                <img className="property-page--image-2" src={`${props.otherImages[0]}`}  />
            </div>
            
            {/* Overview Section */}
            {overviewSection}
            
            {/* Map Section */}
            {/* <div className="property-page--section-divider"/>
            <h3 className="property-page--section-header">Where you’ll be</h3> */}
            
            {/* Rooms Section */}
            {/* <div className="property-page--section-divider"/>
            <h3 className="property-page--section-header">Types of rooms</h3> */}
            
            {/* Amenities Section */}
            {amenitiesSection}
            
            {/* Rules Section */}
            {rulesSection}
        </div>
    )
}

function createOverviewElement(overview, rating, reviewCount){
    if(overview!=null){
        return(
            <div>
                <h3 className="property-page--section-header">Overview</h3>
                <div className="property-page-overview-container">
                    <p className="property-page-overview-text">{overview}</p>
                    <div className="property-page--overview-stats">
                        <div className="property-page--rating">
                            <img className="property-page--rating-icon" src="../images/ic_star.svg" />
                            <span className="property-page--rating-value">{rating}</span>
                            <span className="property-page--rating-total"> / 5</span>
                        </div>
                        <div className="property-page--review">
                            <span className="property-page--review-count">{reviewCount}</span>
                            <span className="property-page--review-text"> Reviews</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function createAmenitiesElementList(amenities){
    if(amenities != null){
        let amenitiesElementList = amenities.map(amenity => {
            return(
            <div>
                <img className="property-page--amenity-icon" src="../images/ic_check.svg"/>
                <span className="property-page--amenity-name">{amenity}</span> 
            </div>
            )
        })
        return amenitiesElementList
    }
    else{
        return null
    }
}

function createRulesElementList(checkInTime, checkOutTime, rules){
    if(checkInTime!=null || checkOutTime!=null || rules != null){
        let checkInTimeElement;
        if(checkInTime!=null){
            checkInTimeElement = (
                <div>
                    <img className="property-page--rule-icon" src="../images/ic_dot.svg"/>
                    <span className="property-page--rule-text">Check-in time: After <b>{checkInTime}</b></span> 
                </div>
            )
        }

        let checkOutTimeElement;
        if(checkOutTime!=null){
            checkOutTimeElement = (
                <div>
                    <img className="property-page--rule-icon" src="../images/ic_dot.svg"/>
                    <span className="property-page--rule-text">Check-out time: Until <b>{checkOutTime}</b></span> 
                </div>
            )
        }
        let rulesElementList;
        if(rules!=null){
            rulesElementList = rules.map(rule => {
                return(
                <div>
                    <img className="property-page--rule-icon" src="../images/ic_dot.svg"/>
                    <span className="property-page--rule-text">{rule}</span> 
                </div>
                )
            })
        }

        return(
            <div>
                {checkInTimeElement}
                {checkOutTimeElement}
                {rulesElementList}
            </div>
        )

    }
    else{
        return null
    }
}