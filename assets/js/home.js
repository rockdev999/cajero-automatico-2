let usuarioLogueado = JSON.parse(localStorage.getItem("usuarioLogueado"))//=> busco el usuario guardado en el navegador

const tituloBienvenida = document.getElementById("tituloBienvenida")
const logoutButton = document.getElementById("logout")


// tituloBienvenida.innerHTML += usuarioLogueado.nombre

logoutButton.addEventListener("click", function(){
    localStorage.removeItem("usuarioLogueado")// elimino el usuario de la memoria del navegador
    window.location= "./login.html"// ME DIRIGE A OTRA PARTE DE MI SITIO, EJ, OTRO HTML
})

// **************** SALDO *********************************

const button_saldo = document.getElementById('saldo');

button_saldo.addEventListener('click', () =>{
  alert('Su saldo actual es: '+ usuarioLogueado.saldo);
});

// *********************** INGRESAR MONTO *********************

const button_ingresa = document.getElementById('ingresa');

button_ingresa.addEventListener('click', () =>{
  let c = 0;
  let ingresado = 0;
  do{
    if(c===0){
      ingresado = prompt('ingrese monto: ');
      c++;
    }else{
      // let aux = parseInt(usuarioLogueado.saldo)+parseInt(ingresado) - 990;
      ingresado = prompt('ingrese un monto menor a '+ingresado+' : ');
    };
  }
  while(parseInt(usuarioLogueado.saldo)+parseInt(ingresado) > 990);
  usuarioLogueado.saldo += parseInt(ingresado);
  alert('monto ingresado: '+ingresado+'\n'+'Saldo actual: '+usuarioLogueado.saldo);
});

// *********************** INGRESAR MONTO *********************
const button_retirar = document.getElementById('retira');

button_retirar.addEventListener('click', () =>{
  let c=0;
  let retiro = 0;
  do{
    if(c===0){
      retiro= prompt('Digite monto a retirar: ');
      c++;
    }else{
      let aux = parseInt(usuarioLogueado.saldo)-10;
      alert('Su cuenta no puede rertirar '+retiro+'.\nMonto maximo a retirar es: '+aux);
      retiro = prompt('Digite monto a retirar nuevamente: ');
    }
  }
  while(parseInt(usuarioLogueado.saldo)-parseInt(retiro)<=10);
  usuarioLogueado.saldo -= parseInt(retiro);
  alert('Saldo actual: '+usuarioLogueado.saldo);
});
