

	    const ABI_FUMIDRONERC20 = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}];
        const ABI_FUMIDRON = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"idDron","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"idParcela","type":"uint256"},{"indexed":false,"internalType":"enum FumiDron.estadoAlta","name":"estado","type":"uint8"}],"name":"FumigacionCompletada","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"idDron","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"idParcela","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"idPesticida","type":"uint256"},{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"bool","name":"result","type":"bool"}],"name":"FumigacionContratada","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"preciovuelo","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"recargas","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"baterias","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"m2fumigados","type":"uint256"}],"name":"costeFumigacion","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"parcela","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"estado","type":"uint256"}],"name":"estadoDron","type":"event"},{"inputs":[{"internalType":"uint256","name":"idDron","type":"uint256"},{"internalType":"uint256","name":"idParcela","type":"uint256"},{"internalType":"uint256","name":"idPesticida","type":"uint256"}],"name":"AltaFumigacion","outputs":[{"internalType":"bool","name":"result","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"idDron","type":"uint256"}],"name":"DatosDrones","outputs":[{"internalType":"uint256","name":"precio","type":"uint256"},{"internalType":"uint256","name":"cargasBateria","type":"uint256"},{"internalType":"uint256","name":"M2fumigado","type":"uint256"},{"internalType":"uint256","name":"altura_maximas","type":"uint256"},{"internalType":"uint256","name":"altura_minimas","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"idParcela","type":"uint256"}],"name":"DatosParcelas","outputs":[{"internalType":"uint256","name":"superficie","type":"uint256"},{"internalType":"uint256","name":"altura_maximas","type":"uint256"},{"internalType":"uint256","name":"altura_minimas","type":"uint256"},{"internalType":"address","name":"owner","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"idDron","type":"uint256"}],"name":"DisponibilidadDron","outputs":[{"internalType":"bool","name":"result","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"DronFumigador","type":"uint256"},{"internalType":"uint256","name":"ParcelaFumigar","type":"uint256"}],"name":"Fumigacion","outputs":[{"internalType":"bool","name":"result","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"idToken","type":"uint256"}],"name":"ListaPesticidasDron","outputs":[{"internalType":"uint256[]","name":"pesticidas","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"idToken","type":"uint256"}],"name":"ListaPesticidasParcela","outputs":[{"internalType":"uint256[]","name":"pesticidas","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"ParcelasPropietario","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TotalDrones","outputs":[{"internalType":"uint256","name":"numTotalDrones","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TotalParcelas","outputs":[{"internalType":"uint256","name":"numTotalParcelas","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"idDron","type":"uint256"},{"internalType":"uint256","name":"idParcela","type":"uint256"}],"name":"compatibilidad","outputs":[{"internalType":"bool","name":"result","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"contract_TokenDron","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"contract_TokenParcela","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"idDron","type":"uint256"},{"internalType":"uint256","name":"idParcela","type":"uint256"}],"name":"costeOperacion","outputs":[{"internalType":"uint256","name":"result","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"idDron","type":"uint256"}],"name":"estadoDrones","outputs":[{"internalType":"uint256","name":"IdParcela","type":"uint256"},{"internalType":"uint256","name":"idEstado","type":"uint256"},{"internalType":"uint256","name":"pesticida","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"listaFumigacion","outputs":[{"internalType":"uint256","name":"idParcela","type":"uint256"},{"internalType":"uint256","name":"idPesticida","type":"uint256"},{"internalType":"enum FumiDron.estadoAlta","name":"estado","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"address","name":"from","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"onERC721Received","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"altura_maxima","type":"uint256"},{"internalType":"uint256","name":"altura_minima","type":"uint256"},{"internalType":"uint256","name":"precio","type":"uint256"},{"internalType":"uint256","name":"cargasBateria","type":"uint256"},{"internalType":"uint256","name":"M2fumigado","type":"uint256"},{"internalType":"uint256[]","name":"pesticida","type":"uint256[]"}],"name":"registrar_dron","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"altura_maxima","type":"uint256"},{"internalType":"uint256","name":"altura_minima","type":"uint256"},{"internalType":"uint256","name":"superficie","type":"uint256"},{"internalType":"uint256[]","name":"pesticida","type":"uint256[]"}],"name":"registrar_parcela","outputs":[{"internalType":"uint256","name":"result","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}];        

		var instanciaEmpresa; 
        var instanciaTokenERC20;
		var web3;
		var cuentaUsuario;
		var cuentaEmpresa;
		
        async function start() {
		
				window.addEventListener('load', async () => {
				if (window.ethereum) {
					console.log("Metamask detected!!!");
					web3 = new Web3(window.ethereum);
					await window.ethereum.enable();
					cuentaEmpresa="0xa499a3BfA8A9119C561CC5fB5eb9455a7b4f8cad";
					instanciaTokenERC20 = await new web3.eth.Contract(ABI_FUMIDRONERC20, "0x9676edC971e0DAF2E382731982dccD764B8311E6"); 	
					instanciaEmpresa= await new web3.eth.Contract(ABI_FUMIDRON, "0x2a0679BDc549BfE7448e756509102dC9fcD9D179");
					var accounts = await web3.eth.getAccounts();
					var accountInterval = setInterval( async function() {
				    var accounts = await web3.eth.getAccounts();
					var cuenta0 = accounts[0];
					
					if (cuenta0 !== cuentaUsuario)	{
						cuentaUsuario = cuenta0;
						TotalDrones().then(displayDrones);
						pintarBalance(cuentaUsuario);
						TotalParcelas().then(displayParcelas);

						}
				}, 100);
				
			}
			else {console.error("Metamask not detected");}
			});
			}
		
        start();
		
//DAR DE ALTA DRON
	
	    async function registroDron (altura_maxima, altura_minima, M2fumigado, cargasBateria, precio) {

			var selectedFerti = new Array();
			selectedFerti=await GetCheckedVal("Dron");
			let estimadoGas = await instanciaEmpresa.methods.registrar_dron(cuentaUsuario, altura_maxima, altura_minima, precio, cargasBateria, M2fumigado, selectedFerti).estimateGas({gas: 5000000});
			var result= await instanciaEmpresa.methods.registrar_dron(cuentaUsuario, altura_maxima, altura_minima, precio, cargasBateria, M2fumigado, selectedFerti).send({from: cuentaUsuario, gas: parseInt(estimadoGas)});
        	//document.getElementById('console').innerHTML = document.getElementById('console').innerHTML+"<br>"+result;
			document.getElementById('idResult').value= result.transactionHash;
			TotalDrones().then(displayDrones);
			event.preventDefault();
			event.stopPropagation();
		}
		
//DAR DE ALTA PARCELA
		
		async function registroParcela (altura_maxima, altura_minima, superficie) {

			var selectedFerti = new Array();
			selectedFerti=await GetCheckedVal("Parcela");
		   	let estimadoGas = await instanciaEmpresa.methods.registrar_parcela(cuentaUsuario, altura_maxima, altura_minima, superficie, selectedFerti).estimateGas({gas: 5000000});
		   	console.log("gas:",estimadoGas);
		   	instanciaEmpresa.methods.registrar_parcela(cuentaUsuario, altura_maxima, altura_minima, superficie, selectedFerti).send({from: cuentaUsuario, gas: parseInt(estimadoGas)},function (error, result) {
				if(!error) {
				      console.log("Parcela creada");
                      document.getElementById('idResult').value= result;
                      //document.getElementById('console').innerHTML = document.getElementById('console').innerHTML+"<br>"+result;
					  document.getElementById('idResult').value= result.transactionHash;
					  TotalParcelas().then(displayParcelas);
				}
                else
				      console.log("Error creando parcela");
                      console.error(error);
				} 
			);	 
		
		}
		
			
//COMPATIBILIDAD
			
		function compatibilidad (idDron,idParcela) {

			 console.log("Llamada a compatibilidad dron", idDron);
			 console.log("Llamada a compatibilidad parcela", idParcela);
			 instanciaEmpresa.methods.compatibilidad(idDron,idParcela).call().then(result => {
						console.log("Resultado compatibilidad:", result);
						document.getElementById('idResult').value= result;
						//document.getElementById('console').innerHTML = document.getElementById('console').innerHTML+"<br>"+result;	
					}).catch(error => console.log(error));
												
		}
		
		
//COSTE FUMIGAR
		
		async function costeOperacion(idDron, idParcela) {

		    var numTokens= await instanciaEmpresa.methods.costeOperacion(idDron, idParcela).call();
			document.getElementById('idResult').value = numTokens;
			//document.getElementById('console').innerHTML = document.getElementById('console').innerHTML+"<br>"+numTokens;	
			console.log("Coste de la Fumigación:", numTokens);
			return numTokens;
		}
		
//CONTRATAR FUMIGACION
		
		async function AltaFumigacion(idDron, idParcela, idFerti) {
		
			let numTokens=  await costeOperacion(idDron, idParcela);
			console.log("numero tokens:", numTokens);
			numTokens = (numTokens * 1000000000000000000);
			numTokens = numTokens.toFixed(0);
			console.log("numero tokens multiplicado:", numTokens);
			//let gasTransfer = await instanciaTokenERC20.methods.transfer(cuentaEmpresa,numTokens).estimateGas({gas: 5000000});
			//console.log("Llamada a transferencia", gasTransfer);
			console.log("Pago a:",cuentaEmpresa);	
			console.log("De usuario:",cuentaUsuario);	
			let resultado = await instanciaTokenERC20.methods.transfer(cuentaEmpresa,numTokens).send({from: cuentaUsuario});
				if (resultado.status == false) {
					document.getElementById('console').innerHTML = document.getElementById('console').innerHTML+"<br>"+"Error de transferencia";
				}
				console.log("Antes de contratar");
			    var gasContratacion = await instanciaEmpresa.methods.AltaFumigacion(idDron, idParcela, idFerti).estimateGas({gas: 5000000});
				console.log("Llamada a Fumigar", gasContratacion);
				instanciaEmpresa.methods.AltaFumigacion(idDron, idParcela, idFerti).send({gas: parseInt(gasContratacion), from: cuentaUsuario}).then
					(result => {
						console.log("Resultado contratación:", result);
						document.getElementById('idResult').value= result;
						//document.getElementById('console').innerHTML = document.getElementById('console').innerHTML+"<br>"+result;	
					}).catch(error => console.log(error));		
				TotalDrones().then(displayDrones);
		}
	  
	  
//DISPONIBILIDAD DRON
	  
			function disponibilidadDron(idDron) {
	
				instanciaEmpresa.methods.DisponibilidadDron(idDron).call(function(error, result) {
				if(!error) {
				      console.log("Resultado disponibilidad:", result);
					  document.getElementById('idResult').value= result;
                      //document.getElementById('console').innerHTML = document.getElementById('console').innerHTML+"<br>"+result;
                }
                else
				{
				      console.log("Error de disponiblidad");
                      console.error(error);
				}}
				);	 
			}
	  
			
	
	function GetCheckedVal(tipo) {

		console.log("Función get:", tipo);
		var selected = new Array();
		if (tipo="Dron") {
			$("#resultados").html("");
			$("input[type='checkbox'][name='pesticidaDron']:checked").each(function() {
			  console.log("Bucle");
			  selected.push($(this).val());
			 $("#resultados").append($(this).val()+" - "+$("label[for='"+$(this).attr("id")+"']").text()+"<br>");
			});
		}
		if (tipo="Parcela") {
		console.log("else parcela");
			$("#resultados").html("");
			$("input[type='checkbox'][name='pesticidaParcela']:checked").each(function() {
			  console.log("Bucle parcela");
			  selected.push($(this).val());
			 $("#resultados").append($(this).val()+" - "+$("label[for='"+$(this).attr("id")+"']").text()+"<br>");
			});
		}
		
	console.log("seleccionado:", selected);
	return selected;
}

	async function TotalDrones() {

		console.log("Lista de drones");
		var totalDrones= await instanciaEmpresa.methods.TotalDrones().call();
		return totalDrones;
    }
	

	async function DronInfo(idDron) {
        var detalleDron= await instanciaEmpresa.methods.DatosDrones(idDron).call();
		return detalleDron;
	}
	
	async function ParcelaInfo(idParcela) {
        var detalleParcela= await instanciaEmpresa.methods.DatosParcelas(idParcela).call();
		return detalleParcela;
	}
	
	async function ListaPesticidasDron(idDron) {
		var listaFertis= new Array();
        var listaFertis= await instanciaEmpresa.methods.ListaPesticidasDron(idDron).call();
		return listaFertis;
    }
	
	async function ListaPesticidasParcelas(idParcela) {
		var listaFertis= new Array();
        var listaFertis= await instanciaEmpresa.methods.ListaPesticidasParcela(idParcela).call();
		return listaFertis;
    }
	
	async function ParcelasPropietario(owner) {
        var listaParcelas= await instanciaEmpresa.methods.ParcelasPropietario(owner).call();
		return listaParcelas;
    }
	
	async function TotalParcelas() {
	    console.log("Lista de parcelas");
        var totalParcelas= await instanciaEmpresa.methods.TotalParcelas().call();
		console.log("Total de parcelas",totalParcelas);
		return totalParcelas;
    }
	
	async function balanceUsuario(address) {
	
	    var balance= await instanciaTokenERC20.methods.balanceOf(address).call();
		return balance;
	}
	
	async function estadoDrones(idDron) {
		console.log("estadoDrones con idDron:", idDron);

		var objeto= await instanciaEmpresa.methods.estadoDrones(idDron).call();
		console.log("estado dron:",objeto);
		return objeto;
	}

//IMPRIME EN PANTALLA TODOS LOS DRONES	
	 async function displayDrones(totalDrones) {
	 
	 	console.log("displayDrones");
	 	var ids = await TotalDrones();
	 	var id=0;
	 	var listaPesticidas= new Array();
	 	var estado;
	 	var pesticida;
	 	var idParcela;
	 	var estado;
	 	var idPesticida;
	 	var text=`<table class="mui-table mui-table--bordered">
		<thead>
		<tr>
		<th valign="middle" style="color:#0000FF" >LISTA DE DRONES</th>
		</tr>
		</thead>
		<table class="mui-table mui-table--bordered">
		<thead>
		<tr>
		<th >Id</th>
		<th>Altura máxima</th>
		<th>Altura mínima</th>
		<th>Duración batería</th>
		<th>M2 fumigación</th>
		<th>Precio</th>
		<th>Pesticidas</th> 
		<th>Estado del dron</th>
		</tr>
		</thead>
		<tbody> `;
		var text2="";
		for (let id = 1; id <= ids; id++) {

//DEVUELVE UN OBJETO DE LOS DRONES DEL CONTRATO
          await DronInfo(id)
          .then(async function(dron) {
			listaPesticidas = await ListaPesticidasDron(id);
			result= await estadoDrones(id);
			console.log("Estado dron: ", result.IdParcela);
			switch (result.idEstado) {
				  case '0':
					estado="sin asignar";
					break;
				  case '1':
					estado="fumigando";
					break;
				  case '2':
					estado="finalizado";
					break;
				  default:
					estado="???";
					break;
				}
				
				switch (result.pesticida) {
				  case '1':
					pesticida="A";
					break;
				  case '2':
					pesticida="B";
					break;
				  case '3':
					pesticida="C";
					break;
				case '4':
					pesticida="D";
					break;
				case '5':
					pesticida="E";
					break;
				  default:
					pesticida="pendiente.";
					break;	
				}
				if (result.IdParcela == 0){
					parcela="pendiente.";
				}else
					parcela=result.IdParcela;
				
			text2=`
			<tr>
                <td>${id}</td>
                <td>${dron.altura_maximas}</td>
				<td>${dron.altura_minimas}</td>
				<td>${dron.cargasBateria}</td>
				<td>${dron.M2fumigado}</td>
				<td>${dron.precio}</td>
				<td>${listaPesticidas} </td>
				<td>Parcela :${parcela} / Estado :${estado} / Pesticida :${pesticida}</td>	
            </tr>`;				
    
		    text = await (text.concat(" ", text2));
          });
        }
		var text3=`</tbody>
	    </table>`;

		text = await (text.concat(" ", text3));
		$("#listaDrones").empty();
		$("#listaDrones").append(text);

	}
	
//IMPRIME EN PANTALLA TODAS LAS PARCELAS
	 async function displayParcelas() {
	 
	 	var ids = await TotalParcelas();
	 	var id=0;
	 	var listaPesticidas= new Array();
	 	console.log("listado de parcelas",ids);
		var text=`<table class="mui-table mui-table--bordered">
		<thead>
		<tr>
		<th valign="middle" style="color:#43d400">LISTA DE PARCELAS </th>
		</tr>
		<tr>
		<th>Id</th>
		<th>Altura máxima</th>
		<th>Altura mínima</th>
		<th>Superficie</th>
		<th>Pesticidas</th>
		</tr>
		</thead>
		<tbody> `;
		var text2="";
		for (let id = 1; id <= ids; id++) {

//DEVUELVE UN OBJETO DE LAS PARCELAS DEL CONTRATO
          await ParcelaInfo(id)
          .then(async function(parcela) {
			listaPesticidas = await ListaPesticidasParcelas (id);
			text2=`
			<tr>
                <td>${id}</td>
                <td>${parcela.altura_maximas}</td>
				<td>${parcela.altura_minimas}</td>
				<td>${parcela.superficie}</td>
				<td>${listaPesticidas} </td>	
            </tr>`;
			
		    text = await (text.concat(" ", text2));
          });
        }
		var text3=`</tbody>
	    </table>`;
		text = await (text.concat(" ", text3));
		$("#listaParcelas").empty();
		$("#listaParcelas").append(text);

	}
	
	async function pintarBalance(address) {
	
	 	var balance = await balanceUsuario(address);
	 	balance= balance / 1000000000000000000;
	 	balance=balance.toFixed(0);
	 	var text=`
	  <table class="mui-table mui-table--bordered">
		<thead>
		<tr>
		<th valign="middle" style="color:#e90002">FUMIDRON TOKEN (FMD) SALDO: ${balance} </th>
		</tr>
		</thead>
	  </table>`;
		$("#balanceERC20").empty();
		$("#balanceERC20").append(text);
	
	}
	
	
	function eventoRegistroDron() {

		registroDron(frmDron.altura_maxima.value, frmDron.altura_minima.value, frmDron.M2fumigado.value, frmDron.cargasBateria.value, frmDron.precio.value);
		event.preventDefault();
		event.stopPropagation();
	}
	
	function eventoRegistroParcela() {

		registroParcela(frmParcela.altura_maxima.value, frmParcela.altura_minima.value, frmParcela.superficie.value);
		event.preventDefault();
		event.stopPropagation();
	}
	
	function eventoCompatibilidad() {

		console.log("compatibilidad", frmAcciones.idDron.value);
		console.log("Parcela", frmAcciones.idParcela.value);
		compatibilidad(frmAcciones.idDron.value, frmAcciones.idParcela.value);
		event.preventDefault();
		event.stopPropagation();
	}
	
	function eventoCoste() {

		costeOperacion(frmAcciones.idDron.value, frmAcciones.idParcela.value);
		event.preventDefault();
		event.stopPropagation();
	}
	
	function eventoCoste() {

		costeOperacion(frmAcciones.idDron.value, frmAcciones.idParcela.value);
		event.preventDefault();
		event.stopPropagation();
	}
	
	function eventoDisponibilidad() {

		disponibilidadDron(frmAcciones.idDron.value);
		event.preventDefault();
		event.stopPropagation();
	}
	
	function eventoContratacion() {

		AltaFumigacion(frmAccionesAltafumigacion.idDron.value, frmAccionesAltafumigacion.idParcela.value,frmAccionesAltafumigacion.idFerti.value);
		event.preventDefault();
		event.stopPropagation();
	}
	

			