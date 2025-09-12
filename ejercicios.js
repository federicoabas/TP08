const resultado = document.getElementById("resultado");
const input = document.getElementById("opciones")

function calculadora()
{
    input.innerHTML="<p>Fecha de nacimiento</p><input type ='date' id = 'fecha'>"
    input.innerHTML+="<p>Tu nombre</p><input type ='text' id = 'nombre'>"
    input.innerHTML+="<button onclick ='ej1()'>Enviar></button>"

}
function ej1()
{
    let nombre = document.getElementById("nombre").value;
    let fechaNacimiento = document.getElementById("fecha").value;


    const hoy = new Date()
    const fechaNac = new Date(fechaNacimiento)

    let edad = hoy.getFullYear() - fechaNac.getFullYear()
    const mes = hoy.getMonth() - fechaNac.getMonth()
    const dia = hoy.getDate() - fechaNac.getDate()

    if (mes < 0 || (mes == 0 && dia < 0)) {
        edad--
    }
    let mensaje = "Hola "+nombre+", tu edad es "+edad
    resultado.innerHTML = mensaje
}


function tirando()
{
    input.innerHTML="<p>Ingrese una fruta</p><input type ='text' id = 'fruta'>"
    input.innerHTML+="<button onclick ='ej2()'>Enviar></button>"
   
}
function ej2()
{
    let fruta = document.getElementById("fruta").value

    let arrayFrutas = ["banana", "anana", "manzana", "kiwi", "pera" ,"damasco" ,"naranja", "mandarina", "uva","cereza"]
    for(let fruta of arrayFrutas) 
    {console.log(`${fruta}`)}

    let siEsta = arrayFrutas.includes(fruta)

    if(siEsta == true)
    {
        let mensaje = "Si, tenemos "+fruta
        resultado.innerHTML = mensaje
    }
    else 
    {
        let mensaje = "No, no tenemos "+fruta
        resultado.innerHTML = mensaje
    }
}
function comparar()
{
    
    let comparacion1 = 10 == 10
    let comparacion2 = 10 === 10
    let mensaje
    if (comparacion1 == true)
    {
        mensaje = "Cuando se compara con dos = el resultado es true"
        resultado.innerHTML = mensaje
    }else{
        mensaje = "Cuando se compara con dos = el resultado es false"
        resultado.innerHTML = mensaje
    }
    if (comparacion2 == true)
    {
        mensaje += " Cuando se compara con tres = el resultado es true"
    }else{
        mensaje += " Cuando se compara con tres = el resultado es false"
    }
    let num = 10.6
    let tipo = typeof num 
    mensaje += " El tipo de dato de 10.6 es "+tipo
    resultado.innerHTML = mensaje
}
function yo()
{
    const ciudad = {
        nombre: "Miami",
        fechaFundacion: "1906",
        poblacion: "200000",
        extension: "1500000 km"
    }
    let mensaje = ""

    for(const propiedad in ciudad)
    {
        mensaje += (` ${propiedad}: ${ciudad [propiedad]} `)}
        resultado.innerHTML += mensaje
    }
    
 


function doble()
{
    let mensaje = "";  
    let arrayNumeros = [1, 4,8,65,32,6,7,8,21]
    for(let num of arrayNumeros) 
     {    console.log(`${num}`)

        mensaje += num
    }  

    mensaje += " array duplicado: "
    const arrayDuplicado = arrayNumeros.map(n => n * 2);
    for(let num of arrayDuplicado) 
    {    console.log(`${num}`)

    mensaje += num
    }  
    resultado.innerHTML += mensaje
}
function triangulo()
{
    let asterisco = "*"
    console.log(asterisco)
    console.log(asterisco.repeat(2))
    console.log(asterisco.repeat(3))
    console.log(asterisco.repeat(4))
    console.log(asterisco.repeat(5))
    
    let filas = 5;
    for (let i = 1; i <= filas; i++)
    {
        let guiones = "-".repeat(filas - i)
        let asteriscos ="*".repeat(2 * i -1)
        console.log(guiones + asteriscos + guiones)

    }
    
    
}

function nombres(){
    input.innerHTML="<p>Ingrese nombres separados por ,</p><input type ='text' id = 'nombres'>"
    input.innerHTML+="<button onclick ='ej7()'>Enviar></button>"
}

function ej7(){
    let lista=document.getElementById("nombres").value
    let nombres=lista.split(', ')
    let mensaje=""
    for(let nombre of nombres)
    {
        if(nombre.startsWith("A")||nombre.startsWith("a")){
            mensaje+=nombre
        }
    }
    resultado.innerHTML=mensaje
}
function reemplazar()
{
    input.innerHTML="<p>Ingrese una frase</p><input type ='text' id = 'frase'>"
    input.innerHTML+="<p>Ingrese palabra que deseas reemplazar</p><input type ='text' id = 'palabra1'>"
    input.innerHTML+="<p>Ingrese la palabra que quieres agregar</p><input type ='text' id = 'palabra2'>"
    input.innerHTML+="<button onclick ='ej8()'>Enviar></button>"
    
}
function ej8()
{
    let frase = document.getElementById("frase").value;
    let palabra1 = document.getElementById("palabra1").value;
    let palabra2 =  document.getElementById("palabra2").value;
    const mensaje = frase.split(palabra1) .join(palabra2)
    resultado.innerHTML += mensaje

}
function cortar()
{
    input.innerHTML="<p>Ingrese una cadena de texto</p><input type ='text' id = 'frase'>"
    input.innerHTML+="<p>Ingrese un numero</p><input type ='int' id = 'numero'>"
    input.innerHTML+="<button onclick ='ej9()'>Enviar></button>"
}
function ej9()
{
    let frase = document.getElementById("frase").value;
    let numero = document.getElementById("numero").value;
    let mensaje = ""
    if (isNaN(numero) || numero < 0) {
        mensaje = "numero no valido"
    }else {
    mensaje = frase.slice(0, numero)
}
resultado.innerHTML=mensaje
}
