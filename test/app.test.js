import App from "../src/object/app.js"
import test from "ava"

test("App instance", (t) => {
	const app = new App("foo")
	t.is(app.message, "foo")
	t.throws(() => {
		app.message = null
	}, { instanceOf: Error })
})

