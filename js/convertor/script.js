function converter(){
    const valor = document.getElementById("numero").value;
    const valorConvertido = valor / 5.26;
    alert("O valor em dolar é " + valorConvertido);
}




const list = [
{name: "rodolfo", age: 15},
{name: "caio", age: 25},
{name: "Luiz", age: 18},
]

list.forEach(function(valores){
if(valores.age <= 18){
    console.log(valores);
}
}
)