module.exports = {
  roots: ['<rootDir>'],
  moduleFileExtensions: ['js', 'jsx', 'json'],
  testPathIgnorePatterns: [
    '<rootDir>[/\\\\](build|docs|node_modules|.next|styles)[/\\\\]',
  ],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
  testEnvironment: 'jsdom',
  testURL: 'http://localhost',
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  testMatch: ['**/*.(test|spec).(js|jsx)'],
};
