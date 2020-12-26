import React from "react";
import "./Forecast.css";
import axios from "axios";
import Overview from "./Overview";

export default function Forecast(props){

let feels = 1;

function showForecast(response){
    console.log(response.data);
    console.log(response.data.list[1].main);
    let feels = response.data.list[1].main.feels_like;
};

    let apiKey = "1a987ebb771192a582d4c3490e38c0df";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showForecast);

return (
    <div>
    < Overview temp={feels} />
    </div>
);
};
