// SPDX-License-Identifier: MIT

/// @title <TOKENPARCELA>
/// @author <ANZONY & RODRIGO>
/// @notice <Estructura de datos y funciones del token de las parcelas>
/// @dev <Indica las propiedades de las parcelas y su creacion>
/// @param <> <>


pragma solidity ^0.8.1;

import "./FumiDronToken.sol";

//TOKEN DE LAS PARCELAS
contract TokenParcela is FumiDronToken {
    
    struct DatosParcelas {
        uint256 superficie;
    }

//RELACION DE ID TOKEN PARCELA CON LA INFORMACION
    mapping(uint256 => DatosParcelas) DetallesParcela;
    constructor(string memory name, string memory symbol) FumiDronToken (name,symbol) {}

//EVENTO DE CREACION PARCELA
    event ParcelaCreada (uint256 tokenId, address to);
   
//CREACION PARCELA
    function mint(address to, uint256 altura_maxima, uint256 altura_minima, uint256 superficie, uint256[] memory pesticida) public returns (uint256 result) {
        uint256 tokenId = super.mint(to, altura_maxima, altura_minima, pesticida);          
        DetallesParcela[tokenId].superficie = superficie;
        emit ParcelaCreada(tokenId,to);
        super.incrementoIndexToken();
        return tokenId;
    }
    function DatosParcela(uint256 idToken) public view returns (uint256 superficie, uint256 altura_maximas, uint256 altura_minimas, address owner) {     
        return (DetallesParcela[idToken].superficie, super.getAltura_maxima(idToken), super.getAltura_minima(idToken), super.ownerOf(idToken));
    }
    function SuperficieParcela(uint256 idToken) public view returns (uint256 superficie) {     
        return (DetallesParcela[idToken].superficie);
    }


}