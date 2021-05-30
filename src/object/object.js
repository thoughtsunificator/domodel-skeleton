import { Observable } from "domodel"

class MyClass extends Observable {

	/**
	 * @param {[type]} field
	 */
	constructor(field) {
		super()
		this._field = field
	}

	/**
	 * @type {[type]}
	 */
	get field() {
		return this._field
	}

}

export default MyClass
