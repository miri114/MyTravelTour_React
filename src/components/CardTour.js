import React from "react";
import seperate from "../seperate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSearchLocation} from "@fortawesome/free-solid-svg-icons";
import tourtest from '../images/tour_test.png';



function CardTour(props)
 {
    return (
        <div className="card_tour">
            <img src={props.item.imgUrl} className="card_tour--img"/>
            <div className="card_tour--place">
                <div className="card_tour--location">
                    <span><FontAwesomeIcon icon={faSearchLocation}></FontAwesomeIcon></span>
                    <span>{props.item.location}</span>
                    <span><a href={props.item.googleMapUrl}>View on google Map</a></span>
                </div>
            <div className="card_tour--describe">
                <h1>{props.item.title}</h1>
                <h4 className="card_tour--date">{props.item.startDate} -- {props.item.endDate}</h4>
                <p className="card_tour--p">
                    {props.item.description}
                </p>
                </div>
            </div>
        </div>
    )
}

export default CardTour;