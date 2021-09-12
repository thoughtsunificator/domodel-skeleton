import "assets/main.css"

import { Core } from "domodel"

import ModelModel from "/model/model.js"
import ModelBinding from "/model/model.binding.js"

window.addEventListener("load", function() {
	Core.run(ModelModel, {
		binding: new ModelBinding(),
		parentNode: document.body
	})
})
