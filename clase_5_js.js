const usuario = [
    {
    Nombre : "Sadia",
    Contraseña : "sadi123",
    Capital : 10,
    },
    {
    Nombre : "David",
    Contraseña : "davi123",
    Capital : 10,
    },
    {
    Nombre : "Anyeli",
    Contraseña : "anyi123",
    Capital : 10,
    }
];

let usuarioSelect 



function validar (nombre, contraseña){
    const formulario = document.getElementById('formulario')
    const inicio = document.getElementById('inicio')
    for (let index = 0; index < usuario.length; index++) {
        if (nombre === usuario[index].Nombre && contraseña === usuario[index].Contraseña) {
            alert ('Login exitoso¡');
            usuarioSelect = usuario[index] 
            formulario.hidden = true;
            inicio.hidden = false;
            document.getElementById('capital').innerHTML = usuarioSelect.Capital
            index=3
        } else if (nombre === '' || contraseña === '') {
            alert ('Se tienen que completar los campos')
        } else if (usuario[index].Nombre === nombre) {
            alert ('Los datos son errados')
        }
    }
    
    
}

document.getElementById('btn').addEventListener('click', function (){
    let nombre = document.getElementById('user').value;
    let contraseña = document.getElementById('pass').value;

   validar (nombre, contraseña);
})



function consultar(){
    document.getElementById('consultar').hidden = false
    document.getElementById('ingreso').hidden = true
    document.getElementById('retiro').hidden = true
    document.getElementById('nombre-cuenta').innerHTML = "¡¡¡Bienvenido " + usuarioSelect.Nombre + "!!!"

    document.getElementById('capital').innerHTML = usuarioSelect.Capital + " dolares"
}

function ingresar (){
    document.getElementById('ingreso').hidden = false
    document.getElementById('consultar').hidden = true
    document.getElementById('retiro').hidden = true
}

function retirar (){
    document.getElementById('retiro').hidden = false
    document.getElementById('consultar').hidden = true
    document.getElementById('ingreso').hidden = true
}

function ingresarDinero (dinero) {
    let limiteMax = 990 - usuarioSelect.Capital
    if (usuarioSelect.Capital + dinero > 990) {
        alert('No se puede tener más de 990 en una cuenta, lo maximo que puede ingresar ahora son ' + limiteMax + ' dolares')
    } else if (usuarioSelect.Capital + dinero <= 990){
        usuarioSelect.Capital = usuarioSelect.Capital + dinero
        document.getElementById('capital-ingresado').innerHTML = "Su nuevo Capital es " + usuarioSelect.Capital + " dolares totales"
        document.getElementById('capital-nuevo').innerHTML = "Se ingresaron " + dinero + " dolares"
    }
    
   
}

function retirarDinero (dinero) {
    let limiteMin = usuarioSelect.Capital - 10 
    if ( usuarioSelect.Capital - dinero < 10) {
        alert('No se puede tener menos de 10 en una cuenta, lo maximo que puede retirar ahora son ' + limiteMin + ' dolares')
    } else if (usuarioSelect.Capital - dinero >= 10){
        usuarioSelect.Capital  = usuarioSelect.Capital - dinero
        document.getElementById('capital-retirado').innerHTML = "Su nuevo Capital es " + usuarioSelect.Capital + " dolares totales"
        document.getElementById('dinero-nuevo').innerHTML = "Se retiraron " + dinero + " dolares"
    }
   
}


document.getElementById('consulta-btn').addEventListener('click', consultar)

document.getElementById('ingreso-btn').addEventListener('click', ingresar)

document.getElementById('retiro-btn').addEventListener('click', retirar)

document.getElementById('button-addon2').addEventListener('click', function(){
    let dinero = Number(document.getElementById('input-number').value)
    ingresarDinero(dinero)
})

document.getElementById('button-addon3').addEventListener('click', function(){
    let dinero2 = Number(document.getElementById('input-number2').value)
    retirarDinero(dinero2)
})


