function testar(x, y){
    if(x > y){
        return false
    }else{
        return true
    }
}

function gerar() {
    let x = parseInt(document.getElementById("valorMinimo").value)
    let y = parseInt(document.getElementById("valorMaximo").value)

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