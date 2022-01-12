const vars = require('./config/vars');
module.exports = {
  plugins: [
    require('postcss-css-variables')({ variables: vars }),
    require('autoprefixer'),
    require('postcss-nested'),
    require('postcss-extend-rule'),
  ],
};
