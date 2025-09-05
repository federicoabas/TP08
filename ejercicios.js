
const input = document.getElementById("opciones")
const resultado = document.getElementById("resultado")

function calculadora(nombre, fecha)
{
    input.innerHTML="<input type ='date' id = 'fecha'>"
    input.innerHTML="<input type ='text' id = 'nombre'>"
    input.innerHTML="<button onclick ='calculadora()'>Enviar></button>"
    let nombre = document.getElementById("nombre").value;
    let fechaNacimiento = document.getElementById("fecha").value;


    let fechaHoy = new Date()
    añoHoy = fechaHoy.getFullYear()
    let fechaDate = Date.parse(fecha)
    añoDate = añoDate.getFullYear()
    edad = añoHoy - añoDate
    return edad
      
}
function ej1()
{



}
function tirando()
{
    let arrayFrutas = ["banana", "anana", "manzana", "kiwi", "pera" ,"damasco" ,"naranja", "mandarina", "uva","cereza"]
    for(let fruta of arrayFrutas) 
    {  console.log(`${fruta}`);  }
}
function comparar()
{
    let comparacion1 = 10 == 10
    let comparacion2 = 10 === 10
}
