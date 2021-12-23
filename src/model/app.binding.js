import { Binding } from "domodel"

import AppEventListener from "./app.event.js"

/**
 * @global
 */
class AppBinding extends Binding {

	/**
	 * @param {object} properties
	 * @param {App} properties.app
	 */
	constructor(properties) {
		super(properties, new AppEventListener(properties.app))
	}

	onCreated() {

		const { app } = this.properties

		this.root.textContent = app.message

		app.emit("log", "App hass started!")

	}

}

export default AppBinding
