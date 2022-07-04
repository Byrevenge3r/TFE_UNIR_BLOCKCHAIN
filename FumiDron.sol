// SPDX-License-Identifier: MIT

/// @title <FUMIDRON>
/// @author <ANZONY & RODRIGO>
/// @notice <Este contrato es donde se encuentran las funciones del negocio>
/// @dev <Registro de drones, Registro de parcelas, Comprobar compatibilidad drones con parcelas, Coste y Fumigacion>
/// @param <> <>


pragma solidity ^0.8.1;

import "./TokenDron.sol";
import "./TokenParcela.sol";
import "./FumiDronERC20.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";


contract FumiDron is IERC721Receiver, Owner {

//ALMACEN DE DIRECCIONES DE CONTRATOS ERC721 DE DRONES Y PARCELAS
    address public immutable contract_TokenDron;
    address public immutable contract_TokenParcela;

    constructor() {

     contract_TokenDron = address(new TokenDron("DRON", "Dron"));
     contract_TokenParcela = address(new TokenParcela("PARCEL", "Parcela"));
    }



//ESTADO ALTA FUMIGACION
    enum estadoAlta {Disponible, Fumigando, Completada}

    struct fumigacion {
        uint256 idParcela;
        uint256 idPesticida;
        estadoAlta estado;
    }

    mapping(uint256 => fumigacion) public listaFumigacion;

    
//REGISTRAR DRON PLATAFORMA
    function registrar_dron(address to, uint altura_maxima, uint altura_minima, uint256 precio, uint256 cargasBateria, uint256 M2fumigado, uint256[] memory pesticida) public returns(uint256) {
        require(altura_maxima > altura_minima, "Valor altura incorrecta"); 
        TokenDron _token_dron = TokenDron(contract_TokenDron); 
        uint256 tokenId = _token_dron.mint(to, altura_maxima, altura_minima, precio, cargasBateria, M2fumigado, pesticida);  
        return tokenId; 
    }

//REGISTRAR PARCELA PLATAFORMA
    function registrar_parcela(address to, uint256 altura_maxima, uint256 altura_minima, uint256 superficie, uint256[] memory pesticida) external returns(uint256 result) {  
        require(altura_maxima > altura_minima, "Valor altura incorrecta");
        TokenParcela _token_parcela = TokenParcela(contract_TokenParcela);
        uint256 tokenId = _token_parcela.mint(to, altura_maxima, altura_minima, superficie, pesticida);
        return tokenId;
    }

//DRON DISPONIBLE
    function DisponibilidadDron (uint256 idDron) public view returns (bool result) {
        if (listaFumigacion[idDron].estado!= estadoAlta.Fumigando) 
    
    {
      return true;

    } else
    return false;

    }






//ALTA FUMIGACION
    event FumigacionContratada(uint256  idDron, uint256 idParcela, uint256 idPesticida, address to, bool result);

    function AltaFumigacion (uint256 idDron, uint256 idParcela, uint256 idPesticida) external returns (bool result) {
        require (DisponibilidadDron(idDron), "El Dron no esta disponible");
        require (compatibilidad(idDron,idParcela), "El dron no es compatible");
        listaFumigacion[idDron].idParcela=idParcela;
        listaFumigacion[idDron].estado = estadoAlta.Completada; 
        listaFumigacion[idDron].idPesticida = idPesticida;   
        emit FumigacionContratada(idDron, idParcela, idPesticida, msg.sender, true);
        return true;
    }
     
//EJECUCION DE FUMIGACION
    event FumigacionCompletada(uint256 idDron, uint256 idParcela, estadoAlta estado);

    function Fumigacion (uint256 DronFumigador, uint256 ParcelaFumigar) external onlyOwner returns (bool result) {
        require(listaFumigacion[DronFumigador].idParcela == ParcelaFumigar, "El Dron no tiene asignada parcela");
        require(listaFumigacion[DronFumigador].estado == estadoAlta.Fumigando, "Dron no activo en parcela");
        listaFumigacion[DronFumigador].estado= estadoAlta.Completada;  
        emit FumigacionCompletada(DronFumigador,ParcelaFumigar,listaFumigacion[DronFumigador].estado);
        return true;
    }

//COMPATIBILIDAD DRON CON PARCELA
    function compatibilidad (uint256 idDron, uint256 idParcela) public view returns (bool result) {
   
        TokenDron _token_dron = TokenDron(contract_TokenDron);
        TokenParcela _token_parcela = TokenParcela(contract_TokenParcela);


        if (_token_dron.getAltura_minima(idDron) > _token_parcela.getAltura_maxima(idParcela))
         return false;

        if (_token_parcela.getAltura_minima(idParcela) > _token_dron.getAltura_maxima(idDron))
         return false;

        uint256[] memory PesticidasDron = _token_dron.listaPesticidas(idDron);
        uint256[] memory PesticidasParcela = _token_parcela.listaPesticidas(idParcela);

        bool PesticidaLleno;

        if (PesticidasParcela.length > PesticidasDron.length){
        return false;
    }

    
        if (PesticidasParcela.length == 0) {
        return true;
        }

        for (uint256 i = 0; i < PesticidasParcela.length ; i++) {
              PesticidaLleno=false;
              for (uint256 j = 0; j < PesticidasDron.length ; j++) {
                    if (PesticidasParcela[i] == PesticidasDron[j] ) {
                      PesticidaLleno=true;
                    }
               }
               if (PesticidaLleno == false) 
               {
                 return false;
              }
      }
         
     return true;
    
    
    }

    event costeFumigacion (uint256 preciovuelo, uint256 recargas, uint256 baterias, uint256 m2fumigados);

//COSTE FUMIGACION
    function costeOperacion (uint256 idDron, uint256 idParcela) external returns (uint256 result) {

        uint256 vueloDron;
    TokenDron _token_dron = TokenDron(contract_TokenDron);
    TokenParcela _token_parcela = TokenParcela(contract_TokenParcela);
    vueloDron = (_token_parcela.SuperficieParcela(idParcela) / _token_dron.VelocidadDron(idDron));

        emit costeFumigacion (_token_dron.PrecioDron(idDron), 1 ,_token_dron.BateriaDron(idDron), vueloDron);
        if (vueloDron <= _token_dron.BateriaDron(idDron))
        return (_token_dron.PrecioDron(idDron));
    
    
    uint256 recarga = (vueloDron / _token_dron.BateriaDron(idDron));
        emit costeFumigacion(_token_dron.PrecioDron(idDron), 1 ,_token_dron.BateriaDron(idDron), vueloDron);
        return (_token_dron.PrecioDron(idDron) * recarga);
    }

    event estadoDron(uint256 parcela, uint256 estado);

    function estadoDrones(uint256 idDron) external returns (uint256 IdParcela, uint256 idEstado, uint256 pesticida) {
        uint256 idParcela_ = 0;
        uint256 idEstado_;
        uint256 pesticidas_;
    
        if (listaFumigacion[idDron].idParcela != 0) {
        idParcela_=listaFumigacion[idDron].idParcela;
        idEstado_=uint256(listaFumigacion[idDron].estado);
        pesticidas_ = listaFumigacion[idDron].idPesticida;
        }
    emit estadoDron(idParcela_,idEstado_);
    return (idParcela_,idEstado_,pesticidas_);
    }

//GETS
    function DatosDrones(uint256 idDron) external view returns (uint256 precio, uint256 cargasBateria, uint256 M2fumigado, uint256 altura_maximas, uint256 altura_minimas) {
        TokenDron _token_dron = TokenDron(contract_TokenDron);
        return (_token_dron.DatosDron(idDron));
    }

    function DatosParcelas(uint256 idParcela) external view returns (uint256 superficie, uint256 altura_maximas, uint256 altura_minimas, address owner) {
        TokenParcela _token_parcela = TokenParcela(contract_TokenParcela);
        return (_token_parcela.DatosParcela(idParcela));
    }

    function ListaPesticidasDron(uint256 idToken) external view returns(uint256[] memory pesticidas) {
        TokenDron _token_dron = TokenDron(contract_TokenDron);
        return (_token_dron.listaPesticidas(idToken));
    }

    function ListaPesticidasParcela(uint256 idToken) external view returns(uint256[] memory pesticidas) {
        TokenParcela _token_parcela = TokenParcela(contract_TokenParcela);
        return (_token_parcela.listaPesticidas(idToken));
    }

    function TotalDrones() external view returns(uint256 numTotalDrones) {
        TokenDron _token_dron = TokenDron(contract_TokenDron);
        return (_token_dron.getlastTokenIndex());
    }

    function TotalParcelas() external view returns(uint256 numTotalParcelas) {
        TokenParcela _token_parcela = TokenParcela(contract_TokenParcela);
        return (_token_parcela.getlastTokenIndex());
    }

    function onERC721Received(address operator, address from, uint256 tokenId, bytes memory data) override public pure returns (bytes4) {
        return 0x150b7a02;
    }

    function ParcelasPropietario(address owner) external view returns (uint[] memory) {

        TokenParcela _token_parcela = TokenParcela(contract_TokenParcela);
        uint256 balance =_token_parcela.balanceOf(owner);
        uint256[] memory tokens = new uint256[](balance);
        for (uint256 i=0; i<balance; i++) {
            tokens[i] = (_token_parcela.tokenOfOwnerByIndex(owner, i));
            }

        return tokens;
    }


}
    