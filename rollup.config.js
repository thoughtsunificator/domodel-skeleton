import path from "path"
import del from "rollup-plugin-delete"
import eslint from '@rollup/plugin-eslint';
import postcss from "rollup-plugin-postcss"
import postcssImport from "postcss-import"
import postcssEasyImport  from "postcss-easy-import"
import stylelint  from "rollup-plugin-stylelint"
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
		del({
			runOnce: true,
			targets: "dist"
		}),
		eslint({
			include: ".eslintrc.json",
			throwOnError: true
		}),
		stylelint({
			throwOnError: true,
			include: ["**/*.css"]
		}),
		postcss({
			extract: true,
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
		isDevelopment && livereload({
			delay: 500,
			watch: [
			 path.resolve(__dirname, 'src')
		 ],
		 exts: [ 'html', 'js', 'css' ]
		})
	]
}
