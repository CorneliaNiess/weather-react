import React, { useState } from "react";
import axios from "axios";
import Forecast from "./Forecast";

import "./Search.css";

export default function Search() {
  let [weather, setWeather] = useState("");
  let [city, setCity] = useState("please enter your city first");
  let apiKey = "1a987ebb771192a582d4c3490e38c0df";

  function updateCity(event) {
    setCity(event.target.value);
  }

  function showTemperature(response) {
    console.log(response.data);
    setWeather(
      <div className="Search">
            <ul>
            <li className="header"> {response.data.name} </li>
            <li className="description"> {response.data.weather[0].description} </li>
            <li>
            {" "}
            <img
              src={`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
              alt="icon"
            />
          </li>
        </ul>
        <ul className="Details">
          <li> Temperature: {response.data.main.temp} C</li>
          <li> Humidity: {response.data.main.humidity} % </li>
          <li> Wind: {response.data.wind.speed} km/h </li>
        </ul>
        <Forecast city={response.data.name} counter = {1}/> 
        <Forecast city={response.data.name} counter = {2}/>
        <Forecast city={response.data.name} counter = {3}/>
        <Forecast city={response.data.name} counter = {4}/> 
      </div>
    );
  }

  function getUrl(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showTemperature);
  }
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Search for a city"
          className="Enter"
          onChange={updateCity}
        />
        <input
          type="submit"
          value="search"
          className="Submit"
          onClick={getUrl}
        />
      </form>
      {weather}
    </div>
  );
}
