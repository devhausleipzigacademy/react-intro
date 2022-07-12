import React from "react";
import ReactDOM from "react-dom";
import { App } from "./app";

const app = document.getElementById("app") as HTMLElement;

ReactDOM.render(
	<React.StrictMode>
		<App></App>
	</React.StrictMode>,
	app
);
