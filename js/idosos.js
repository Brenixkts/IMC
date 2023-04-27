const resultado = document.querySelector('#resultado')
const altura = document.querySelector('#altura')
const peso = document.querySelector('#peso')

function calcImc () {
      if (altura.value != '' && peso.value != '') { 
        const imc =(peso.value / (altura.value * altura.value)).toFixed(2)
        
        let classificacao = ''
        

        if (imc < 18.4){
            classificacao = 'Desnutrição'
        } else if (imc > 18.5 && imc < 24.9){
            classificacao = 'Adequado'
        } else if ( imc > 25 && imc < 29.9){
            classificacao = 'Sobrepeso'
        } else if ( imc > 30 ){
            classificacao = 'Obesidade'
        }
        resultado.innerHTML = `IMC: ${imc} (${classificacao})`
    }   else{
        resultado.innerHTML = 'Preencha os campos'
    }
}