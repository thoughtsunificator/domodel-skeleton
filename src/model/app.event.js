import { EventListener } from "domodel"

/**
 * @global
 */
class AppEventListener extends EventListener {

	/**
	 * @event AppEventListener#log
	 * @property {string} data
	 */
	log(data) {
		console.log(data)
	}

}

export default AppEventListener
