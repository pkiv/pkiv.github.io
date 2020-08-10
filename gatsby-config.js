/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
        title: `Paul Klein`,
        description: `Code creator and problem solver .`,
        author: `@pkiv`,
    },
    plugins: [
        `gatsby-plugin-styled-components`,
        {
            resolve: 'gatsby-plugin-web-font-loader',
            options: {
                custom: {
                    families: ['Aeonik'],
                    urls: ['/fonts/fonts.css'],
                },
            },
        },
        `gatsby-plugin-react-helmet`
    ],
};
