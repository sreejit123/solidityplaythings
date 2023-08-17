pragma solidity ^0.4.17;

contract Person {
    string name;

    function Person (string _name) public {
        name = _name;
    }

    function getName() public view returns(string) {
        return name;
    }

    function setName(string _name) public {
        name = _name;
        return name;
    }
}