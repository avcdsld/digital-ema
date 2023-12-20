const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const nextConfiguration = {
  i18n: {
    locales: ['en', 'ja'],
    defaultLocale: 'en',
  },
};

module.exports = withPlugins([optimizedImages], nextConfiguration);
