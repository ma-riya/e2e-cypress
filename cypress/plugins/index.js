const cypressTypeScriptPreprocessor = require("./cy-ts-preprocessor");

const fs = require("fs-extra");
const path = require("path");

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve(
    "..",
    "meridian-e2e-tests/cypress/config",
    `${file}.json`
  );

  return fs.readJson(pathToConfigFile);
}

module.exports = (on, config) => {
  on("file:preprocessor", cypressTypeScriptPreprocessor);
  const file = config.env.configFile || "staging";

  return getConfigurationByFile(file);
};
