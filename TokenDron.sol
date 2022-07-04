// SPDX-License-Identifier: MIT

/// @title <TOKENDRON>
/// @author <ANZONY & RODRIGO>
/// @notice <Estructura de datos y funciones del token de los drones>
/// @dev <Indica las propiedades de los drones y su creacion>
/// @param <> <>


pragma solidity ^0.8.1;

import "./FumiDronToken.sol";

//TOKEN DE LOS DRONES
contract TokenDron is FumiDronToken {

    struct Dron {
        uint256 precioDron;
        uint256 cargasBateria;
        uint256 M2fumigado;
    }

//RELACION DE ID TOKEN DRON CON LA INFORMACION
    mapping(uint256 => Dron) DetallesDron;
    constructor(string memory name, string memory symbol) FumiDronToken(name, symbol) {}

//EVENTO DE CREACION DRON
    event DronCreado (uint256 tokenId, address to, address muyself);

//CREACION DRON
    function mint(address to, uint256 altura_maxima, uint256 altura_minima, uint256 precio, uint256 cargasBateria, uint256 M2fumigado, uint256[] memory pesticida)  public returns (uint256 result) {
        uint256 tokenId = super.mint(to, altura_maxima, altura_minima, pesticida);          
        DetallesDron[tokenId].cargasBateria = cargasBateria;
        DetallesDron[tokenId].precioDron = precio;
        DetallesDron[tokenId].M2fumigado = M2fumigado;
        emit DronCreado(tokenId,to,address(this));
        super.incrementoIndexToken();
        return tokenId;   
    }
    function DatosDron(uint256 idToken) public view returns (uint256 precio, uint256 cargasBateria, uint256 M2fumigado, uint256 altura_maximas, uint256 altura_minimas) {
        return (DetallesDron[idToken].precioDron, DetallesDron[idToken].cargasBateria, DetallesDron[idToken].M2fumigado, super.getAltura_maxima(idToken), super.getAltura_minima(idToken));
    }

    function BateriaDron(uint256 idToken) public view returns (uint256 cargasBateria) {
        return (DetallesDron[idToken].cargasBateria);
    }
    function PrecioDron(uint256 idToken) public view returns (uint256 precio) {
        return (DetallesDron[idToken].precioDron);
    } 
    
    function VelocidadDron(uint256 idToken) public view returns (uint256 M2fumigado) {
        return (DetallesDron[idToken].M2fumigado);
    }

}