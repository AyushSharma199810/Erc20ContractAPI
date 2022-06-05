// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <=0.9.0;


interface IERC20 {
    function name() external view returns (string memory);

    function symbol() external view returns (string memory);

    function decimals() external view returns (uint8 );

    function balanceOf(address _owner) external view returns (uint256 balance);

    function transfer(address _to, uint256 _value)
        external
        returns (bool success);

    function transferFrom(
        address _from,
        address _to,
        uint256 _value
    ) external returns (bool success);
 
    function approve(address _spender, uint256 _value)
        external
        returns (bool success);

    function allowance(address _owner, address _spender)
        external
        view
        returns (uint256 remaining);
  
     event Transfer(address indexed _from, address indexed _to, uint256 _value);
     event Approval(address indexed _owner, address indexed _spender, uint256 _value);
     event balace(address indexed _from, uint256 _value);
	 

   

}

contract mycontract is IERC20{
    string private Tname = "xyz"; 
    uint8  private Tdecimals = 5; 
    string private  Tsymbol = "RXB";
    uint256 public totalSupply;
    address _owner =msg.sender;
    mapping(address => uint256) balances;
    mapping(address=>mapping(address=>uint))allowed;


    modifier Onlyowner{
        require(msg.sender == _owner,"require owner");
        
		_;

        
    }


    // constructor(){
    //     }
    function name() public override view returns (string memory ){
                return Tname;
    }

    function symbol() public override view returns (string memory){
                return Tsymbol;
    }

    function decimals() public override view returns (uint8){
                return Tdecimals;
    }

    function owner()public view  returns (address){
                return _owner;
    }
    function balanceOf(address _check_address)
        public
        view
        override
        returns (uint256 balance)
    {
        return balances[_check_address];
		
    }

    function transfer(address _to, uint256 _value)
        public 

        override
        returns (bool success)
    {
        require(balances[msg.sender] >= _value);
        balances[msg.sender] -= _value;
        balances[_to] += _value;
        emit Transfer(msg.sender,_to, _value);
        return true;
    }

    function transferFrom(
        address _from,
        address _to,
        uint256 _value
    ) public override returns (bool success)
    {

         require(_value <= allowed[_from][_to],"value is greater");
         require(_value <= balances[_from],"balance is lower");
         allowed[_from][_to]-=_value;
         balances[_to] += _value;
         balances[_from] -= _value;
         emit Transfer( _from,_to, _value);

         return true;
    }

    function check_balance(address add) public view returns(uint256){
        
		return balances[add];
    
		
    }

    function approve(address _spender, uint256 _value)
        public
        override
        Onlyowner
        returns (bool success)
        {   
            //balances[_spender]=_value;
            allowed[msg.sender][_spender] = _value;
            emit Approval( msg.sender, _spender,_value);
            return true;
        }

      function allowance(address _approvedBy, address _spender)
        public 
        override
        view
        returns (uint256 remaining)
        {
            return allowed[_approvedBy][_spender];
        }
        function mint (uint tokens) public Onlyowner returns (bool) {
           
            totalSupply +=tokens;
            balances[msg.sender]+=tokens;
            return true;
        }

        function burn(uint tokens)public Onlyowner returns(bool){
           
           totalSupply-=tokens;
           balances[msg.sender]-=tokens;
           return true;
        }


}
