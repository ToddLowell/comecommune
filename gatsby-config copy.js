module.exports = {
  siteMetadata: {
    title: 'Come Commune! | ComeCommune',
    description:
      'Laws unspoken, unbroken and unknown. Come Commune is a blog by Brendan Low where he talks about his life and experience with the world.'
  },
  plugins: [
    'gatsby-plugin-emotion',
    `gatsby-plugin-sass`,
    'gatsby-plugin-react-helmet',
    // 'gatsby-transformer-sharp',
    // 'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js')
        }
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/posts`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/images`
      }
    }
  ]
};
