module.exports = {
  siteMetadata: {
    title: 'Raymond Li',
  },
  plugins: [
  	'gatsby-plugin-react-helmet',
  	{
		resolve: 'gatsby-plugin-typography',
		options: {
			pathToConfigModule: 'src/utils/typography.js',
		},
  	},
  ],
}
