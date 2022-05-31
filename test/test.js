const mycontract = artifacts.require("./build/contracts/mycontract")
contract("mycontract", hello =>{
    it("should return true value" ,async () => {
    const instance = await mycontract.deployed();
    const set1 = await instance.set(2,3);
    console.log(set1.toNumber())
    // const result = await mycontract.set();
    assert(set1.toNumber() == 5);
    });
});
    



 