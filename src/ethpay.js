/*
ETHPAY.JS by Alexander Abraham, a.k.a. "Angel Dollface".
Licensed under the MIT license.
*/

/// Sends specified amount of ETH tokens on the specified network to 
/// the specified address from the specified address using the specified 
/// private key of the sender. Ropsten is the only supported test network.
function send_token(network, send_token_amount,to_address,send_account,private_key) {
    let gas_limit = '0x100000';
    let wallet = new ethers.Wallet(private_key)
    let walletSigner = wallet.connect(window.ethersProvider)
    window.ethersProvider.getGasPrice().then(
        (currentGasPrice) => {
            let gas_price = ethers.utils.hexlify(parseInt(currentGasPrice))
            const tx = {
                from: send_account,
                to: to_address,
                value: ethers.utils.parseEther(send_token_amount),
                nonce: window.ethersProvider.getTransactionCount(
                    send_account,
                    "latest"
                ),
                gasLimit: ethers.utils.hexlify(gas_limit),
                gasPrice: gas_price,
            };
            try {
                walletSigner.sendTransaction(tx).then(
                    (transaction) => {
                        var txUrl = '';
                        if (network === 'main'){
                            var txUrl = 'https://etherscan.io/tx/' + transaction.hash;
                        }
                        else {
                            var txUrl = 'https://ropsten.etherscan.io/tx/' + transaction.hash;
                        }
                        alert(txUrl);
                    }
                );
            } catch (error) {
                alert('Payment failed!');
            }
        }
    );
}

/// Simplified form of the "send_token" function.
function payETH(network, sender, recipient, amount, privateKey){
    let wallet = new ethers.Wallet(privateKey);
    let walletSigner = wallet.connect(window.ethersProvider);
    if (network === 'main'){
        // ONLY USE THIS FOR SENDING ACTUAL MONEY!!!!
        window.ethersProvider = new ethers.getDefaultProvider();
    }
    else {
        // This is for testing!
        window.ethersProvider = new ethers.providers.InfuraProvider('ropsten');
    }
    send_token(
        network,
        amount,
        recipient,
        sender,
        privateKey
    );
}