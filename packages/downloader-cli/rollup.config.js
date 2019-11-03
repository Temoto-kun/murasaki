import commonjs from 'rollup-plugin-commonjs'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

export default [
	{
		input: './src/index.js',
		output: {
			path: './bin/index.js',
			format: 'cjs',
		},
		plugins: [
			peerDepsExternal({
				includeDependencies: true,
			}),
			commonjs(),
		],
	},
]
