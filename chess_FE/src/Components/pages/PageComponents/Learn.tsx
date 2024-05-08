import React from "react";
import { API } from "../../../axios";
import { useParams } from "react-router-dom";

const Learn = () => {
    const { learnID } = useParams()
    API.get(`/learn/${learnID}`)
    return (
        <div className="Learn">
            <img>{ }</img>
            <div>
                <h3>Глава { }</h3>
                <p>{ }</p>
            </div>
        </div>
    )
}

export default Learn