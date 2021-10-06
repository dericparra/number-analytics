let numeros = []
let res = document.querySelector('div#res')
console.log(numeros)
function adicionar() {
    let newN = document.querySelector('input#number')
    let select = document.querySelector('select#numeros')
    let number = Number(newN.value)
    res.innerHTML = ''

    if ( number < 1 || number > 100) {
        window.alert('Favor informar um numero de 1 a 100')
    } else {
        let item = document.createElement('option')
        item.text = `O Numero ${number} foi adcionado`
        select.appendChild(item)
        numeros.push(number)
        
    }
    console.log(number)
}

function analisar() {


    numeros.sort


    let total = document.createElement('p')
    let maior = document.createElement('p')
    let menor = document.createElement('p')
    let somados = document.createElement('p')
    let media = document.createElement('p')
    let soma = numeros.reduce((soma, currentElement) => soma + currentElement)

    total.innerHTML = `Foram informados ${numeros.length} numeros`
    maior.innerHTML = `O maior numero informado é ${numeros[numeros.length-1]}`
    menor.innerHTML = `O menor numero informado é ${numeros[0]}`
    somados.innerHTML = `A soma de todos itens é ${soma}`
    media.innerHTML = `A media dos numeros informados é ${soma/numeros.length}`

    res.appendChild(total)
    res.appendChild(maior)
    res.appendChild(menor)
    res.appendChild(somados)
    res.appendChild(media)

}