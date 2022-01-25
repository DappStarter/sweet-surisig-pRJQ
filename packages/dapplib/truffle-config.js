require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict robot flock tribe strong rival situate common harvest define army gather'; 
let testAccounts = [
"0xe9c51d55aac336938f4a1bbe81871ce8dc5507f88bd7d42eff6ac5945fb0e384",
"0xc71a79fbe7c6bef8908ef454c59d75d780a434ff51f2ee4a4df0a4e3873a86de",
"0xb1f7a517d4c35af4a677704efdb25f5f8daaf9739bb88e75ca853a71d76acc48",
"0x1581f510a16364620c2f642133a863f0518a81bf621fa910012d3350c9afd58a",
"0x6f090b12ffc9e685544f9fd6541b410b538e8a19c6bd23f84fcd6e409a88f928",
"0x42b712fb9125cddb3080de5a8e1e089e9b71a82dea111e11db105d5ab1246705",
"0x6a2ee7dbedc4c2cbef7d59b17ab2458630f690a66eb14bb71163ef48f86b04c1",
"0x0dca012112d989aa360d1e7240cdc43d652f0524b9d5aeaa54bca9e480039f1d",
"0x6964e39da9c2b14962a3e253a1011322e901b2165fcb713c7d11ba1f27e2d1a9",
"0xe8cc0bb9c17df086ee8dc7a460d850ddcd83ee8890ce8d1ed93ac1dfe45b0f83"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


