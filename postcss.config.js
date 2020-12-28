module.exports = ({ env }) => ({
  plugins: {
		tailwindcss: {},
		'postcss-nested': {},
		autoprefixer: {},
		cssnano: env === 'production' ? { 
			preset: [ 'default', { discardComments: { removeAll: true } } ]
		} : false
  }
})
