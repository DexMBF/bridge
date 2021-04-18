const BridgeEth = artifacts.require('BridgeEth.sol');
const BridgeBsc = artifacts.require('BridgeBsc.sol');

module.exports = async function (deployer, network, addresses) {
  if(network === 'ethTestnet') {
    // await deployer.deploy(TokenEth);
    // const tokenEth = await TokenEth.deployed();
    // await tokenEth.mint(addresses[0], 1000);
    await deployer.deploy(BridgeEth, "0x2021c7d40778dCB84cF577CCF70bAf8c6ea9c88F");
    const bridgeEth = await BridgeEth.deployed();
    // await tokenEth.updateAdmin(bridgeEth.address);
  }
  if(network === 'bscTestnet') {
    // await deployer.deploy(TokenBsc);
    // const tokenBsc = await TokenBsc.deployed();
    await deployer.deploy(BridgeBsc, "0x613f276cdAbc9a56f7A7BFbd4729969F282EDd04");
    const bridgeBsc = await BridgeBsc.deployed();
    // await tokenBsc.updateAdmin(bridgeBsc.address);
  }
};
