// SPDX-License-Identifier: MIT

/// @title <FUMIDRONERC20>
/// @author <ANZONY & RODRIGO>
/// @notice <Este contrato es el token con el que se realizaran los pagos>
/// @dev <Es un token ERC20>
/// @param <> <>

pragma solidity ^0.8.1;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract FumiDronERC20 is ERC20 {


    constructor() ERC20("FumiDron", "FMD") {
      super._mint(msg.sender, 5000000 * 10 ** decimals());
     
    }

    function mint(address to, uint256 amount) public {
        super._mint(to, amount);
    }

}