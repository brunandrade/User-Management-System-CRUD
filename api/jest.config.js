module.exports = {
  bail: true,
  clearMocks: true,  
  //maxWorkers: 1,
  preset: 'ts-jest',
  testEnvironment: 'node',
  // collectCoverage: false,
  //collectCoverageFrom: ["src/**", "!src/database/migrations/**"],
  // coverageDirectory: '__tests__/coverage',
  testMatch: [
    "**/__tests__/**/*.test.ts?(x)",
  ],
};