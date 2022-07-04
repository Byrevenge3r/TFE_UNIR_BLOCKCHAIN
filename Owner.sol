// SPDX-License-Identifier: MIT

/// @title <OWNER>
/// @author <ANZONY & RODRIGO>
/// @notice <>
/// @dev <>
/// @param <> <>


pragma solidity ^0.8.1;


contract Owner {
    address public owner;

    constructor()  {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        if (msg.sender == owner)
            _;
    }
    function transferOwnership(address newOwner) public onlyOwner {
        require(newOwner != address(0),"Direccion no valida");
        owner = newOwner;
    }

   
}