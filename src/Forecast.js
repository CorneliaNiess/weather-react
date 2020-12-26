import React from "react";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props){

 function getUrl() {

function showTemperature(){
    <h1> hello from showTemperature</h1>
};

    let city = `${props.city}`;
    let apiKey = "1a987ebb771192a582d4c3490e38c0df";
    let url = `https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showTemperature);
 };
return <p> The city {props.city} from Forecast </p>;
};
