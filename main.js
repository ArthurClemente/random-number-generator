function testar(x, y){
    if(x > y){
        return false
    }else{
        return true
    }
}

function checadoNeg(){
    let caixaNeg = document.getElementById("checkNeg").checked
    return caixaNeg
}

function checadoDec() {
    let caixaDec = document.getElementById("checkDec").checked
    return caixaDec
}

function eNegativo(num) {
    if(num < 0){
        return true
    }else{
        return false 
    }
}

function gerarDec(x, y) {
    if(x === y){
        document.getElementById("saida").value = x
    }
    if(testar(x, y) === true){
        let randomNum = Math.random() * (y - x) + x;
        document.getElementById("saida").value = randomNum.toFixed(1)
    }else{
        alert('Intervalo inválido!!')
        return
    }
}

function gerarInt(x, y) {
    if(x === y){
        document.getElementById("saida").value = x
    }
    if(testar(x, y) === true){
        let randomNum = Math.random() * (y - x) + x;
        document.getElementById("saida").value = Math.floor(randomNum)
    }else{
        alert('Intervalo inválido!!')
        return
    }
}

function main() {
    let x = parseInt(document.getElementById("valorMinimo").value)
    let y = parseInt(document.getElementById("valorMaximo").value)

    if(checadoDec()){
        if((eNegativo(x) || eNegativo(y)) && !checadoNeg()){
            alert('Marque Negativos.')
        }else{
            gerarDec(x, y)
        }
    }else{
        if((eNegativo(x) || eNegativo(y)) && !checadoNeg()){
            alert('Marque Negativos.')
        }else{
            gerarInt(x, y)
        }
    }
}