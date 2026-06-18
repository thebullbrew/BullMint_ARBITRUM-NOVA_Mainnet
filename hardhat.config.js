require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.24",

  networks: {
    arbitrumNova: {
      url: process.env.ARBITRUM_NOVA_RPC,
      accounts: [process.env.PRIVATE_KEY],
      chainId: 42170
    }
  }
};
