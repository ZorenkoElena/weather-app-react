import React from "react";
import FormatDay from "./FormatDay";
import FormatTime from "./FormatTime";
import WeatherIcon from "./WeatherIcon";
import "./CurrentWeather.css";

export default function CurrentWeather(props) {
	return (
		<div className="CurrentWeather">
			<div className="row">
				<div className="col-6">
					<div className="city">{props.data.city}</div>
					<div className="time">
						<FormatDay date={props.data.date} />{" "}
						<FormatTime date={props.data.date} />
					</div>
					<div className="minorFigures">
						<div>{props.data.description}</div>
						<div>
							Humidity: <span className="values">{props.data.humidity}</span> %
						</div>
						<div>
							Wind: <span className="values">{props.data.wind}</span> km/h
						</div>
						<div>
							Pressure: <span className="values">{props.data.pressure}</span>{" "}
							hPa
						</div>
					</div>
				</div>
				<div className="col-6">
					<div className="majorFigures">
						<WeatherIcon code={props.data.icon} size={60} />
						<span className="temperature"> {props.data.temperature} </span>
						<span className="units">°C</span>
					</div>
					<div className="minorFigures">
						<div>
							Max: <span className="values">{props.data.temp_max} </span>
							°...Min: <span className="values">{props.data.temp_min} </span>°
						</div>
						<div>
							Sunrise:
							<span className="values">
								{" "}
								<FormatTime date={props.data.sunrise} />
							</span>
							...Sunset:
							<span className="values">
								{" "}
								<FormatTime date={props.data.sunrise} />
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
