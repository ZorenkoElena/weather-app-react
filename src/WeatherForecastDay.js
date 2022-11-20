import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./WeatherForecast.css";
import "bootstrap/dist/css/bootstrap.css";

export default function WeatherForecastDay(props) {
	function day() {
		let date = new Date(props.data.dt * 1000);
		let day = date.getDay();

		let dayOfWeekContracted = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

		return dayOfWeekContracted[day];
	}

	return (
		<div className="WeatherForecastDay">
			<div>
				<div>{day()}</div>
				<div className="Icon mt-2 mb-1">
					<WeatherIcon code={props.data.weather[0].icon} size={35} />
				</div>
				<div>
					<span>{Math.round(props.data.temp.max)}° </span>
					<span className="Min">{Math.round(props.data.temp.min)}°</span>
				</div>
			</div>
		</div>
	);
}
