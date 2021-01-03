module.exports = {
  siteMetadata: {
    title: 'Come Commune! | ComeCommune',
    description:
      'Laws unspoken, unbroken and unknown. Come Commune is a blog by Brendan Low where he talks about his life and experience with the world.',
  },
  plugins: [
    'gatsby-plugin-emotion',
    `gatsby-plugin-sass`,
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js'),
        },
        gatsbyRemarkPlugins: ['gatsby-remark-images'],
        plugins: ['gatsby-remark-images'],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyzer',
      options: {
        production: true,
        disable: !process.env.ANALYZE_BUNDLE_SIZE,
        generateStatsFile: true,
        analyzerMode: 'static',
      },
    },
  ],
};
