module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  collectCoverageFrom: ['<rootDir>/**/*.{ts, tsx}'],
  roots: ['<rootDir>'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts|tsx)$',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};
