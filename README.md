# Cryptographic Functions

Cryptography is the study of decoding and encoding codes and cyphers. In this lab, you'll be writing javascript functions that decode and encode strings of text!

## Instructions

Fork and clone this lab, and then cd into the lab directory. Run `npm install` to install the needed dependencies. Open `index.html` to see the tests, and follow along with the instructions below to get them to pass.

You'll be writing javascript functions inside of `ciphers.js` - each function will perform a different cryptographic task.

### Caesar Cipher

A Caesar cipher is one of the simplest (and easiest cracked) encryption methods. It is a Substitution Cipher that involves replacing each letter of the secret message with a different letter of the alphabet which is a fixed number of positions further in the alphabet.

For example: "Cat" with a position shift of 3 is: "Fdw"

Write a caesar encryption and decryption function in `ciphers.js`.

### Atbash Cipher
The Atbash cipher is a very specific case of a substitution cipher where the letters of the alphabet are reversed. In otherwords, all As are replaced with Zs, all Bs are replaced with Ys, and so on.

Because reversing the alphabet twice will get you actual alphabet, you can encipher and decipher a message using the exact same algorithm - so only one function needed here!

```
Plaintext: This is a secret message
Ciphertext: Gsrh rh z hvxivg nvhhztv
```

### Keyword Cipher
The Keyword cipher is identical to the Caesar Cipher with the exception that the substitution alphabet used can be represented with a keyword (In this case, KEYWORD).

To create a substitution alphabet from a keyword, you first write down the alphabet. Below this you write down the keyword (omitting duplicate letters) followed by the remaining unused letters of the alphabet.

```
ABCDEFGHIJKLMNOPQRSTUVWXYZ
KEYWORDABCFGHIJLMNPQSTUVXZ
```

To encipher a plaintext message, you convert all letters from the top row to their corresponding letter on the bottom row (A to K, B to E, etc).
