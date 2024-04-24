function formatarValorDecimal(valorDecimal) {
    valorEmReais = `R$ ${valorDecimal.toFixed(2).toString().replace(".", ",")}` // replace subistitui o primeiro pelo segundo item
    console.log(valorEmReais)
}

formatarValorDecimal(0.1 + 0.2)