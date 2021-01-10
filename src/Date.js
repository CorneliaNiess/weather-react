import React from "react";
import "./Date.css";

export default function Date(props){
let timestamp = props.date*1000;
if (props.time === "forecast") {
return <div className="Date"> In 3 hours.. {timestamp}  </div> 
}
else return <div className="Date"> Donnerstag, 10. August 2021  <p> Current time: 12.00 </p>  </div>
}
