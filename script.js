function verificar(){
    var data = new Date
    var ano = data.getFullYear()
    var formulario = document.getElementById('txtAno')
    var res = document.getElementById('res')
    if(formulario.value == 0 || Number(formulario.value) > ano){
        alert('Revise os campos')
    } else{
        var feminino = document.getElementsByName('radsex')
        var idade = ano - Number(formulario.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(feminino[0].checked){
            genero = 'Homem'
            if(idade < 10 && idade >= 0){
                //criança
                img.setAttribute('src', 'menino.png')
            } else if( idade >= 10 && idade < 20){
                //jovem
                img.setAttribute('src', 'jovemh.png')
            } else if(idade >= 20 && idade < 50){
                //Homem
                img.setAttribute('src', 'Homem.png')
            } else {
                //Idoso
                img.setAttribute('src', 'Idoso.png')
            }

        } else if(feminino[1].checked){
            genero = 'Mulher'
            if(idade < 10 && idade >= 0){
                //criança
                img.setAttribute('src', 'menina.png')
            } else if( idade >=10 && idade < 20){
                //jovem
                img.setAttribute('src', 'jovemm.png')
            } else if(idade >= 20 && idade < 50) {
                //adulto
                img.setAttribute('src', 'mulher.png')
            } else {
                //idoso
                img.setAttribute('src', 'idosa.png')
            }
            



        }
        res.style.textAlign = 'center'
        res.innerHTML = `detectamos: ${genero} com idade: ${idade} ano(s)!`        
        res.appendChild(img)
    }

}