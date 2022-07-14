import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SplashPage } from "./pages/splash";

const root = document.getElementById("root") as HTMLElement;

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<SplashPage />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
	root
);
