const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig');

module.exports = {
  preset: 'jest-preset-angular',
  roots: ['<rootDir>/src/'],
  testMatch: ['**/+(*.)+(spec).+(ts)'],
  setupFilesAfterEnv: [
    "<rootDir>/src/setupJest.ts"  
  ],
  collectCoverage: true,
  coverageReporters: ['html'],
  coverageDirectory: 'coverage/my-app',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths || {}, {
    prefix: '<rootDir>/',
  }),
  transform: {
    "^.+/.(ts|js|html)$": "ts-jest",
    "^.+/.js$": "babel-jest"
  },
};