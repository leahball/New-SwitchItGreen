module.exports = {
  typescript: {
    reactDocgen: false,
  },
  stories: ['../components/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  refs: {
    '@chakra-ui/react': {
      disable: true,
    },
  },
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-essentials',
    'storybook-addon-next',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  core: { builder: 'webpack5' },
  webpackFinal: async config => {
    // the Chakra UI-critical part
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@emotion/core': '@emotion/react',
          '@emotion/styled': '@emotion/styled',
          'emotion-theming': '@emotion/react',
        },
      },
    }
  },
}
