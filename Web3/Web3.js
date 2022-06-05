const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));
const ABI = require("../build/contracts/mycontract.json");
const ethers = require('ethers');
const contractABI = ABI.abi;
// const ethers =require("ethers")
const url = "HTTP://127.0.0.1:7545";
const provider = new ethers.providers.JsonRpcProvider(url);
const signer0 = provider.getSigner(0);


const contractAddress = ABI.networks[5777].address;
// console.log(contractAddress);
const contract = new web3.eth.Contract(contractABI, contractAddress);

module.exports = {Web3,web3, ABI, ethers, contractABI, contractAddress, contract}