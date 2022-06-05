const {Web3,web3, ABI, ethers, contractABI, contractAddress, contract} = require('../Web3/Web3')

const mint = async (req,res) => {
    try {
        
        
        
        const number= await req.body.value; 
        console.log(number);
                
        const result = await contract.methods.mint(number).send({from: "0x25Db0D1CEc34d3d19EB5c8f6C5850D1489B9f257"});
        res.send(result);
        // console.table(result);
        
    } catch (error) {
        console.error(error);
    }
    
    // res.sendFile(path.join(__dirname,"../sample.html"))

}


// const  burn = async (req,res )=> {


// }

const transferFrom = async (req,res )=> {
    // const fromAddress = req.body.from;

    // const toAddress = req.body.to
    // const Token_value = req.body.value;
    // const result  = await contract.methods.transferFrom(fromAddress,toAddress,Token_value).send({from: "0x25Db0D1CEc34d3d19EB5c8f6C5850D1489B9f257" });
    // // console.log(result);
    // res.send(result);
    // console.log(signer0);
    // const a = await ethers.provider.getTransactionReciept("0xbfb6051c98d989c017efa4266c75c02d44edd9b7cc7e501bd15ccfda8742f2d5");
    
    console.log(a);



}

const approve  = async (req,res )=> {
    const spenderAddress = req.body.add;
    const approvalamount = req.body.value;
    const result  = await contract.methods.approve(spenderAddress,approvalamount).send({from: "0x25Db0D1CEc34d3d19EB5c8f6C5850D1489B9f257" });
    res.send(result);



}



const balanceof= async (req,res )=> {
    try {
        const add = (req.body.address).toString();
        console.log(add);

        const result2 = await contract.methods.balanceOf(add).call({from: "0x25Db0D1CEc34d3d19EB5c8f6C5850D1489B9f257"});
        res.send(result2);
        // console.log(result2);


        
    } catch (error) {
        console.error(error);
        
    }

}


// const balanceof = async (req,res )=> {

// }


const transfer = async (req,res )=> {
    
        try {
            
        
            const to = (req.body.to);
            const value1 = req.body.value; 
            console.log(to,value1);
            const result1 = await contract.methods.transfer(to , value1).send({from: "0x25Db0D1CEc34d3d19EB5c8f6C5850D1489B9f257"});
            res.send(result1);
            console.table(result1);
        } catch (error) {
            console.error(error);
            
        }
    
    

}


module.exports = {mint, transfer,balanceof, transferFrom, approve}
    // {transferfrom, checkbalance, approve, burn}