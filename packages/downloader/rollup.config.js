export default [
  {
    input: './src/lib/index.js',
    output: {
      path: './lib/index.js',
      format: 'cjs',
    },
  },
  {
    input: './src/bin/index.js',
    output: {
      path: './bin/index.js',
      format: 'cjs',
    },
  },
]
