import { Binding } from "domodel"

export default class extends Binding {

	onCreated() {

		this.root.textContent = "Your domodel app is running!"

	}

}
