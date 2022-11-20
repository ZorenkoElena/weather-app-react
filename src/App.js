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
						This project was coded by Elena Zorenko and is{" "}
						<a
							href="https://github.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							open-sourced on GitHub
						</a>{" "}
						and{" "}
						<a href="https://" target="_blank" rel="noopener noreferrer">
							hosted on Netlify
						</a>
					</div>
				</footer>
			</div>
		</div>
	);
}

export default App;
