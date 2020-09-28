module.exports = {
	siteMetadata: {
		title: "AS2 Network",
		description: "Freight Trust Network ",
		keywords: "as2,design,system,badges,tutorial,acclaim",
		lang: "en",
	},
	pathPrefix: ``,
	plugins: [
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				name: "Freight Trust AS2 Network",
				short_name: "AS2 Network",
				start_url: "/",
				background_color: "#ffffff",
				theme_color: "#0062ff",
				display: "browser",
			},
		},
		{
			resolve: "gatsby-theme-carbon",
			options: {
				isSearchEnabled: false,
				navigationStyle: "header",
				repository: {
					baseUrl: `https://github.com/carbon-design-system/gatsby-theme-carbon`,
					subDirectory: `/packages/example`
				},
				iconPath: `./src/images/favicon.png`,
			},
		},
	],
};
