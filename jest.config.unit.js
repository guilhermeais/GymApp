const defaultConfig = require('./jest.config');
/**
 * @type {import('jest').Config}
 */
module.exports = {
  ...defaultConfig,
  displayName: 'UNIT',
  testMatch: ['<rootDir>/__tests__/**/*.spec.ts'],
};
