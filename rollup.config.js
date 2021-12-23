import path from "path"
import postcss from "rollup-plugin-postcss"
import postcssImport from "postcss-import"
import postcssEasyImport  from "postcss-easy-import"
import { terser } from "rollup-plugin-terser"
import copy from "rollup-plugin-copy-watch"
import { nodeResolve } from "@rollup/plugin-node-resolve"
import serve from "rollup-plugin-serve"
import livereload from "rollup-plugin-livereload"

const isProduction = process.env.BUILD === "production"
const isDevelopment = !isProduction

export default {
	input: "src/main.js",
	output: {
		file: "dist/bundle.js",
		format: "iife",
		sourcemap: isDevelopment
	},
	plugins: [
		postcss({
			minimize: isProduction,
			sourceMap: isDevelopment,
			extract: true,
			plugins: [postcssEasyImport(), postcssImport()]
		}),
		terser(),
		copy({
			watch: isDevelopment ? 'public' : false,
			targets: [{ src: "public/*", dest: "dist" }],
			flatten: false
		}),
		nodeResolve(),
		isDevelopment && serve({
			contentBase: "dist",
			port: 3000
		}),
		isDevelopment && livereload("dist")
	]
}
