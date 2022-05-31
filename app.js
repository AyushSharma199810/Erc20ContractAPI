// const Web3 = require("web3");
// const web3 = new Web3("http://localhost:7545");
// const ethers = require("ethers");
async function metamask() {
    
    if(typeof window.ethereum != "undefined") {
     await ethereum.request({method: "eth_requestAccounts"});
     document.getElementById("connect").innerHTML = "Connected";
  
    // document.getElementById("connect").innerHTML = "Connected";
}};

async function execute() {
    //address
    //contract ABI(blueprint)
    //function
    //node connection
    const contractaddress = "0xC9F357148140AcdfE64C895BeDAcb11be02Ea6dD";
    const abi =[
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_x",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_y",
            "type": "uint256"
          }
        ],
        "name": "set",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "pure",
        "type": "function",
        "constant": true
      }
    ]


const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner(); 

const contract = new ethers.Contract(contractaddress,abi,signer);
const value = document.getElementById("number").value;
const value2 = document.getElementById("number2").value; 
await contract.set(value,value2).then(console.log);

}

// module.exports = {
//     metamask,
//     execute
// };
async function fund(ethamount) {
  console.log(`fund with ${ethamount}...`);
  if(typeof window.ethereum != "undefined"){



}}