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
		this.root.textContent = this.properties.app.message
		this.properties.app.emit("log", "App has started!")
	}

}

export default AppBinding
