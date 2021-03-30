require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek sun sugar shock rescue spawn purse include climb outer snake'; 
let testAccounts = [
"0xdc20ebafec50bde1fe7cb669a13b8f5bab4634673cd6418f4b3cdc68dee6c2e9",
"0xddc25e3012c23b6494c0af512bbfc421e328dfb27d6d7cc360337d8392564e69",
"0x1c1c87c5882d0a23c90812abc4c8bbd421eece95781223c205cd69e4be7b509f",
"0x07336196bfbc93ded5a711df6d0d0497bc031118a693bc7abea9b0959d76a1f7",
"0x8a6648b8b7a4554ab94e00877e19cd00209ca740db0903b245bffc9f75f4dd73",
"0x96ad5d1a157a1b783aaef71fb150bb68dbc4d78668cfe396793fdd7e35a641f7",
"0xa5667a77138428949ae9793073f65aa8956e4428543a6c52a5b99d743ec65fec",
"0x0c83994ae69b5afead68bb4f280ec7e1de12350e50e14204cff7ee38f9763e89",
"0xa01b8e4420dfbef70dbc62d201835b4602b030e0e13d89d5e961f593c96d4ab0",
"0xccc1d8e4308b82b0d93f5c7f6750eb488ef2843cf7a466e7ef05517d5a09c165"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
