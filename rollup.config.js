import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'


export default {
  input: './src/index.js',
  output: {
    file: './lib/web-safe-colors.js',
    format: 'umd',
    name: 'WebSafeColors'
  },
  plugins: [
    babel({
      include: './src/index.js'
    }),
    uglify()
  ]
}
