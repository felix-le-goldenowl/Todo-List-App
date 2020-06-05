/* eslint-disable import/no-extraneous-dependencies */
const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    components: 'src/components',
    containers: 'src/containers',
    actions: 'src/actions',
    constants: 'src/constants',
    reducers: 'src/reducers',
  })(config);
  return config;
};
