import React from 'react';
import "./Overview.css";


export default function Overview(props){

return (
<div className ="Overview">
    <ul>
        <li className="Date"> {props.date} </li>
        <li>  <img
              src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}
              alt="icon"
            /> <strong>{props.temp} C </strong> </li>
        <li className="Description"> <em>{props.description} </em> </li>
        <li className="Feels"> Feels like: {props.feels} </li>
    </ul>
     <ul>
        <li className="Details"> Windspeed: {props.windspeed} km/h </li>
        <li className="Details"> Humidity: {props.humidity} % </li>
        <li className="Details"> Max. temperature: {props.max} C </li>
        <li className="Details"> Min. temperature: {props.min} C </li>
    </ul>
   </div>
)
}