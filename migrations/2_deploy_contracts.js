// 2_deploy_contracts.js
const LandRegistry = artifacts.require("LandRegistry");

module.exports = function (deployer) {
  deployer.deploy(LandRegistry);
};
