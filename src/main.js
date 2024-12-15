import "./main.css"

import { Core } from "domodel"

import { AppModel, AppBinding } from "./model/app.js"

import App from "./object/app.js"

window.addEventListener("DOMContentLoaded", function() {

	const app = new App("Your domodel app is running!")
	Core.run(AppModel, {
		binding: new AppBinding(app),
		target: document.body
	})

})
