import "./main.css"

import { Core } from "domodel"

import AppModel from "./model/app.js"
import AppBinding from "./model/app.binding.js"

import App from "./object/app.js"

window.addEventListener("load", function() {

	const app = new App("Your domodel app is running!")
	Core.run(AppModel, {
		binding: new AppBinding({ app }),
		parentNode: document.body
	})

})
