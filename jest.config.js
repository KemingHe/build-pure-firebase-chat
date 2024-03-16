module.exports = {
  preset: "jest-expo",
  verbose: true,
  randomize: false,
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}"],
  setupFiles: ['<rootDir>/jest.setup.js'],
  //transform: { "^.+\\.jsx?$": "babel-jest" },
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|@react-native(-community)?|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg|firebase))"
  ],
  testEnvironment: "jest-environment-node",
  globals: {
    "ts-jest": {
      useESM: true
    }
  },
  extensionsToTreatAsEsm: [".ts", ".tsx", ".jsx"],
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1"
  }
};