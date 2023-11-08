const usuario = [
    {
    Nombre : "Sadia",
    Contraseña : "sadi123",
    Capital : 10,
    },
    {
    Nombre : "Luisa",
    Contraseña : "luis123",
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
            document.getElementById('capital').innerHTML = 'Capital : ' + usuarioSelect.Capital
            index=3
        } else if (nombre === '' || contraseña === '') {
            alert ('Se tienen que completar los campos')
        } else if (usuario[index].Nombre === nombre) {
            alert ('Los datos son errados')
        }
    }
    
    
}



function consultar(){
    document.getElementById('consultar').hidden=false

}
document.getElementById('consulta-btn').addEventListener('click', consultar

)

document.getElementById('btn').addEventListener('click', function (){
    let nombre = document.getElementById('user').value;
    let contraseña = document.getElementById('pass').value;

    validar (nombre, contraseña);
})

function capital (dinero){
  usuarioSelect.Capital  = usuarioSelect.Capital + dinero
  document.getElementById('capital').innerHTML = 'Capital : ' + usuarioSelect.Capital
}


document.getElementById('ingresar').addEventListener('click', function (){

    let dinero = parseInt(document.getElementById('añadir').value);
    capital (dinero)

})