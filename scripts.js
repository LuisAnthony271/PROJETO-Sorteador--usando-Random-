function generateNumber(){
    console.log('teste')

    const min = document.querySelector('.input-min').value
    const max = document.querySelector('.input-max').value
    const sorted = document.querySelector('.result')
    const minCeiled = Math.ceil(min)
    const maxFloored = Math.floor(max)
    
    const result = Math.floor(Math.random() * (maxFloored - minCeiled+1) + minCeiled)

    if(max > min) { sorted.value = result}
    
    else {alert("o valor minimo precisa ser MENOR que o valor maximo.")}
        
}