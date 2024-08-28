module.exports = {
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "<rootDir>/__mocks__/styleMock.js",
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
  testEnvironment: "jsdom",
};
