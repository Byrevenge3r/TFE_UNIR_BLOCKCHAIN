// SPDX-License-Identifier: MIT

/// @title <FUMIDRONTOKEN>
/// @author <ANZONY & RODRIGO>
/// @notice <Este contrato es el token ERC721 con la estructura comun que tiene el token de drones y parcelas>
/// @dev <>
/// @param <> <>


pragma solidity ^0.8.1;

import "./Owner.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

contract FumiDronToken is ERC721, ERC721Enumerable, Owner {

    uint256 public lastTokenIndex;

//ESTRUCTURA INFORMACION TOKENS COMUN
   struct Tokens { 
       uint256 altura_maxima;
       uint256 altura_minima;
       uint256[] Pesticidas;
    }
  
//RELACION ID CON TOKENS
    mapping(uint => Tokens) public ListaTokens;

//RELACION TOKENS CON PESTICIDAS
    mapping (uint256 => uint256) public ListaPesticidas; 

    constructor(string memory name, string memory symbol) ERC721(name, symbol) Owner() {     
    }

    event supermint (uint256 tokenId, address dir);

    function incrementoIndexToken() public {
        lastTokenIndex = lastTokenIndex + 1;
    }

    function getlastTokenIndex() public view returns (uint256 numTotalTokens) {
        return lastTokenIndex;
    }
   
    function mint(address to, uint256 altura_maxima, uint256 altura_minima, uint256[] memory pesticidas) public returns(uint256) {
        _safeMint(to,lastTokenIndex+1);
        ListaTokens[lastTokenIndex+1].altura_maxima = altura_maxima;
        ListaTokens[lastTokenIndex+1].altura_minima = altura_minima;
        
        for(uint256 i=0; i< pesticidas.length; i++){      
            ListaTokens[lastTokenIndex+1].Pesticidas.push(pesticidas[i]);
        } 
          
         return lastTokenIndex + 1;
    }

    function DatosTokens(uint256 idToken) public view returns(uint256 altura_maxima, uint256 altura_minima, uint256[] memory pesticidas) {               
        return (ListaTokens[idToken].altura_maxima,ListaTokens[idToken].altura_minima,ListaTokens[idToken].Pesticidas);
    }

    function getAltura_maxima(uint256 idToken) public view returns(uint256 altura_maxima) {
        return (ListaTokens[idToken].altura_maxima);
    }

    function getAltura_minima(uint256 idToken) public view returns(uint256 altura_minima) {
        return (ListaTokens[idToken].altura_minima);
    }

    function listaPesticidas(uint256 idToken) public view returns(uint256[] memory pesticidas) {
        return (ListaTokens[idToken].Pesticidas);
    }


    function _beforeTokenTransfer(address from, address to, uint256 tokenId) internal override(ERC721, ERC721Enumerable) {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    function supportsInterface(bytes4 interfazId) public view override(ERC721, ERC721Enumerable) returns (bool) {
        return super.supportsInterface(interfazId);
    }
    

}