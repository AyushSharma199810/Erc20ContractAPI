const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7546"));
const ABI = require("../build/contracts/mycontract.json");
const path = require("path");
const contractABI = ABI.abi;

const contractAddress = ABI.networks[5777].address;
// console.log(contractAddress);
const contract = new web3.eth.Contract(contractABI, contractAddress);

const mint = async (req,res) => {
    try {
        
        
        // const web3 = await new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7546"));
        const number = req.body.token_value;
        
     
        // console.log(req.body);
        // res.send(req.body);
        // res.send(number)
        // console.log(number);
        const result = await contract.methods.mint(number).send({from: "0x194692C52EA102Af8acA62F38912Bea5537CFf35"});
        res.send(result);
        // res.send("hello");
    } catch (error) {
        console.log(error);
    }
    
    // res.sendFile(path.join(__dirname,"../sample.html"))

}


// const  burn = async (req,res )=> {


// }

// const transfer = async (req,res )=> {

// }

// const approve  = async (req,res )=> {

// }



const checkbalance= async (req,res )=> {
    try {
        const add = (req.body.address).toString();
        console.log(add);

        const result2 = await contract.methods.balanceOf(add).send({from: "0x194692C52EA102Af8acA62F38912Bea5537CFf35"});
        res.send(result2);


        
    } catch (error) {
        console.error(error);
        
    }

}


// const balanceof = async (req,res )=> {

// }


const transfer = async (req,res )=> {
    
        try {
            
        
            const to = (req.body.to).toString();
            const value1 = req.body.value; 
            console.log(to,value1)
            const result1 = await contract.methods.transfer(to , value1).send({from: "0x194692C52EA102Af8acA62F38912Bea5537CFf35"});
            res.send(result1);
            console.table(result1);
        } catch (error) {
            console.error(error);
            
        }
    

}


module.exports = {mint, transfer,checkbalance}
    // {transferfrom, checkbalance, approve, burn}