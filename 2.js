function identifica(lado1, lado2, lado3) {

    if (lado1 == lado2 && lado2 == lado3) {
        return "Equilátero"
    }
    else if (lado1 != lado2 && lado1 != lado3 && lado2 != lado3) {
        return "Escaleno"
    }
    else
        return "Isósceles:"
}

console.log(" triangulo " + identifica(3, 2, 2))