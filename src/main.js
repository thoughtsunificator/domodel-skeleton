import "./main.css"

import { Core } from "domodel"

import AppModel, { AppBinding } from "./model/app.js"

import App from "./object/app.js"

window.addEventListener("load", function() {

	const app = new App("Your domodel app is running!")
	Core.run(AppModel, {
		binding: new AppBinding({ app }),
		parentNode: document.body
	})

})
