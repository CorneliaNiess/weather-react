import React, { useState } from "react";
import "./Search.css";

export default function Search(props) {
  let [city, setCity] = useState("!Please enter your city first!");
  let [result, setResult] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    setResult(`It is ${props.temperature}°C in ${city}`);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  return (
    <div className="Search">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for a city"
          className="Enter"
          onChange={updateCity}
        />
        <input type="submit" value="search" className="Submit" />
      </form>
      <p> {result} </p>
    </div>
  );
}
