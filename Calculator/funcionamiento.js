alert("negrancisco negred")
function mostrarResultado(resultado){
    document.getElementById("textoResultado").value= resultado
}

function suma(){
    let num1 = +document.getElementById("numero1").value;
    let num2 = +document.getElementById("numero2").value;    

    let res= num1 + num2;
    mostrarResultado(res)
}

function resta(){
    let num1 = +document.getElementById("numero1").value;
    let num2 = +document.getElementById("numero2").value;    

    let res= num1 - num2;
    mostrarResultado(res)
}

function mult(){
    let num1 = +document.getElementById("numero1").value;
    let num2 = +document.getElementById("numero2").value;    

    let res= num1 * num2;
    mostrarResultado(res)
}

function dividir(){
    let num1 = +document.getElementById("numero1").value;
    let num2 = +document.getElementById("numero2").value;    

    let res= num1 / num2;
    mostrarResultado(res)
}

function potencia(){
    let num1 = +document.getElementById("numero1").value;
    let num2 = +document.getElementById("numero2").value;    

    let res= Math.pow(num1, num2);
    mostrarResultado(res);
}

function raiz(){
    let num1 = +document.getElementById("numero1").value;

    let res= Math.sqrt(num1);
    mostrarResultado(res);
}

function abs(){
    let num2 = +document.getElementById("numero2").value;

    let res= Math.abs(num2);
    mostrarResultado(res);
}

function random(){
    let minimo = +document.getElementById("numero1").value;
    let maximo = +document.getElementById("numero2").value;    

    maximo= maximo +1;
    mostrarResultado(Math.floor(Math.random() * (maximo - minimo) + minimo));
}

function redondear(){
    let resultado= +document.getElementById("textoResultado").value;
    mostrarResultado(Math.round(resultado));
}

function piso(){
    let resultado= +document.getElementById("textoResultado").value;
    mostrarResultado(Math.floor(resultado));
}

function techo(){
    let resultado= +document.getElementById("textoResultado").value;
    mostrarResultado(Math.ceil(resultado));
}

function borrar(){
    location.reload()
}