module.exports = {
  roots: ['<rootDir>'],
  moduleFileExtensions: ['js', 'jsx', 'json'],
  testPathIgnorePatterns: [
    '<rootDir>[/\\\\](build|docs|node_modules|.next)[/\\\\]',
  ],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
  testEnvironment: 'jsdom',
  testURL: 'http://localhost',
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  testMatch: ['**/*.(test|spec).(js|jsx)'],
};
