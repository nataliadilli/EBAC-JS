function calculoMedia(){
    let num1 = parseFloat(document.getElementById("num1").value)
    let num2 = parseFloat(document.getElementById("num2").value) 
    let num3 = parseFloat(document.getElementById("num3").value)

    let resultado = document.getElementById("resultado")

    let calculo =(num1 + num2 + num3) / 3
    
    resultado.innerHTML = calculo
}