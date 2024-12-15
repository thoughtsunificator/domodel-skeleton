import { Binding } from "domodel"

const AppModel = {
	tagName: "div",
	id: "app"
}

class AppBinding extends Binding {

	/**
	 * @param {App} app
	 */
	constructor(app) {
		super()
		this.app = app
	}

	onCreated() {
		this.root.textContent = this.app.message
	}

}

export { AppModel, AppBinding }
