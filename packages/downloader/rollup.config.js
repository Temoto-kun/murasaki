import dotenv from 'dotenv'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import { terser } from 'rollup-plugin-terser'

dotenv.config()

export default [
	{
		input: './src/index.js',
		output: {
			path: './lib/index.js',
			format: 'cjs',
		},
		plugins: [
			peerDepsExternal({
				includeDependencies: true,
			}),
			babel(),
			commonjs(),
			process.env.NODE_ENV === 'production' && terser(),
		],
	},
]
