const config = {
  clearMocks: true,
  collectCoverage: false,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testEnvironment: 'jest-environment-node',
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  transformIgnorePatterns: ['\\\\node_modules\\\\', '\\.pnp\\.[^\\\\]+$'],
  watchman: true,
  /*reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        publicPath: './html-report',
        filename: 'report.html',
        expand: true,
        pageTitle: 'My Custom Test Report',
        customInfos: [
          { title: 'Project:', value: 'AQA Test' },
          { title: 'Environment', value: 'Production' },
        ],
        hideIcon: true,
        openReport: true,
      },
    ],
  ],*/
};

module.exports = config;
