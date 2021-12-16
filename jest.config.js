module.exports = {
  roots: ["<rootDir>"],
  testEnvironment: "jsdom",
  moduleFileExtensions: ["ts", "tsx", "js", "json", "jsx"],
  testPathIgnorePatterns: [
    "<rootDir>[/\\\\](node_modules|.next|cypress)[/\\\\]",
  ],
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$"],
  transform: {
    "^.+\\.(ts|tsx)$": "babel-jest",
  },
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
  ],
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "^@components/(.*)$": "<rootDir>/components/$1",
    "^@layouts/(.*)$": "<rootDir>/layouts/$1",
    "^@its-types/(.*)$": "<rootDir>/its-types/$1",
    "^@react-sdk$": "<rootDir>/react-sdk",
    "^@its-sdk$": "<rootDir>/sdk",
  },
}
