import React from "react";
import Weather from "./Weather";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
	return (
		<div className="App">
			<div className="container">
				<main>
					<Weather defaultCity="Odesa" />
				</main>
				<footer>
					<div className="signature">
						This project was coded by
						<a
							href="https://www.linkedin.com/in/elena-zorenko-a6125024a/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Elena Zorenko
						</a>
						and is{" "}
						<a
							href="https://github.com/ZorenkoElena/weather-app-react.git"
							target="_blank"
							rel="noopener noreferrer"
						>
							open-sourced on GitHub
						</a>{" "}
						and{" "}
						<a
							href="https://sparkling-horse-7db353.netlify.app"
							target="_blank"
							rel="noopener noreferrer"
						>
							hosted on Netlify
						</a>
					</div>
				</footer>
			</div>
		</div>
	);
}

export default App;
