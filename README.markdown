# ETH PAY :lock: :fire: :money_mouth_face:

***A simple API for small users of the Ethereum payment network to embed payments on their site.*** :lock: :fire: :money_mouth_face:

## ABOUT

***ETH Pay*** is a simple API for people who would like to receive Ethereum tokens into their wallets and embed this functionality into their wallets. I really tried to keep this as simple as possible. Enjoy. :heart:

## USAGE

### Abstract example

Using ***ETH Pay*** is very simple. To use it, add these two lines to your HTML page:

- 1.) Fetching the `ethers.js` library:
```HTML
<script async src="https://cdn.ethers.io/lib/ethers-5.2.umd.min.js" type="application/javascript"></script>
```
- 2.) Fetching ***ETH Pay*** directly from GitHub:
```HTML
<script async src="https://raw.githubusercontent.com/angeldollface/ethpay/main/src/ethpay.js" type="application/javascript"></script>
```
This will make the `payETH` function available to you! This function takes the following parameters:

- `network`: Are you making transactions on the main Ethereum network or a test network. The only supported test network is Ropsten as of now.
- `senderAddress`: The hexadecimal address of the sender.
- `recipientAddress`: The hexadecimal address of the person receieving ETH.
- `amount`: How many ETH are being sent?
- `senderPrivateKey`: What is the sender's private wallet key? This also has to correspond to the correct network!

Once the transaction is completed, an alert with the URL to the transcation on Etherscan will pop up. If it fails, there will be an error, also in an alert.

### Concrete example

An example of someone sending 0.1 ETH to someone else might look something like this. The visitor of the page submits their private key and their public address to the respective input field and presses the `PAY` button. By doing so, they are sending 0.1 ETH to the recipient.

```HTML
<!doctype html>
<html>
 <head>ETHPAY</head>
 <body>
  <!--This could be an image or some sort of product.-->
  <p>You are buying product X for 0.1 ETH.</p>

  <!--The sender types their public address here.-->
  <input id="address"></input>

  <!--The sender types their private key here.-->
  <input id="privKey"></input>

  <!--
  Once those fields are filled in, 
  they press this button to make the transaction.
  -->
  <button onclick="buyProduct();">PAY</button>

  <!--Importing the ETH Pay library.-->
  <script async src="https://raw.githubusercontent.com/angeldollface/ethpay/main/src/ethpay.js"></script>

  <!--Importing the ethers.js library.-->
  <script src="https://cdn.ethers.io/lib/ethers-5.2.umd.min.js"
        type="application/javascript"></script>
      
  <!--The section containing our "buyProduct" function.-->
  <script>
    function buyProduct(){

        // Getting the sender address from the form.
        var senderAddress = document.getElementById('address').value;

        // Getting the sender private key from the form.
        var senderPrivateKey = document.getElementById('privKey').value;

        // The address of the recipient. (YOU)
        var recipientAddress = 'some_address';

        // The amount of ETH.
        var amount = '0.1';

        // The network on which this transaction is being made.
        var network = 'main'; // When testing replace this with 'ropsten'.

        // Submitting the transaction to the network.
        payETH(
            network,
            senderAddress,
            recipientAddress,
            amount,
            senderPrivateKey
        );
    }
  </script
 </body>
</html>
```

## NOTE :scroll:

- *ETH Pay :lock: :fire: :money_mouth_face:* by Alexander Abraham :black_heart: a.k.a. *"Angel Dollface" :dolls: :ribbon:*
- Licensed under the MIT license.