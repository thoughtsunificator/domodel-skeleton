import test from "ava"
import { Core, Binding } from "domodel"
import { JSDOM } from "jsdom"
import App from "../object/app.js"
import { AppModel, AppBinding } from "./app.js"

const RootModel = { tagName: "div" }

test.beforeEach((t) => {
	t.context.virtualDOM = new JSDOM()
	t.context.window = t.context.virtualDOM.window
	t.context.document = t.context.window.document
	t.context.rootBinding = new Binding()
	Core.run(RootModel, { target: t.context.document.body, binding: t.context.rootBinding })
})

test("instance", (t) => {
	t.true(AppBinding.prototype instanceof Binding)
})

test("onCreated", (t) => {
	const app = new App("Your domodel app is running!")
	const binding = new AppBinding(app)
	t.context.rootBinding.run(AppModel, { binding })
	t.is(binding.root.textContent, "Your domodel app is running!")
	t.is(t.context.document.querySelector("#app"), binding.root)
})
